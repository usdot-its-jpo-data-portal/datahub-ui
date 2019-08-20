import json
from os import path
import requests
from DHDataset import DHDataset
import datetime
import boto3

class DHDatasetVerification:

    def __init__(self, params=None):
        self._params = params
        self._jConfig = None

    @property
    def params(self):
        return self._params

    @params.setter
    def params(self, value):
        self._params = value

    def _validateParams(self, params):
        jConfig = None
        if params == None:
            print("Error: Invalid parameters")
            return None

        if not path.exists(self._params.config) or path.isdir(self._params.config):
            print("Error: Configuration file not found.")
            return None


        with open(self._params.config) as f:
            jConfig = json.load(f)
        f.close()

        if jConfig == None:
            print("Error: Invalid configuration file.")
            return None

        return jConfig

    def _get_ntl_data(self, jConfig):
        ntlConfig = jConfig['ntl']
        if ntlConfig == None:
            print("Error: Configuration for NTL not found, check the configuration file.")
            quit()
        reqStr = ntlConfig['url']+ntlConfig['collection']+ntlConfig['datelimit']+ntlConfig['rows']
        resp = requests.get(reqStr)
        jResp = json.loads(resp.text)
        datasets = []
        for doc in jResp['response']['docs']:
            if doc == None:
                continue

            if 'Dataset' not in doc['mods.sm_resource_type']:
                continue

            ds = DHDataset()
            ds.name = doc['dc.title'][0]
            ds.id = doc['PID']
            ds.source = 'ntl'
            ds.url = ntlConfig['link']+doc['PID'].split(':')[1]
            
            datasets.append(ds)

        return datasets

    def _get_socrata_data(self, jConfig, name):
        dtgConfig = jConfig[name]
        if dtgConfig == None:
            print("Error: Configuration for DTG not found, check the configuration file.")
            quit()
        reqStr = dtgConfig['url']+'?q=data&search_context='+dtgConfig['domain']+'&domains='+dtgConfig['domain']+'&tags=intelligent%20transportation%20systems%20(its)&provenance=official'
        resp = requests.get(reqStr)
        jResp = json.loads(resp.text)
        datasets = []
        for result in jResp['results']:
            if result == None:
                continue
            ds = DHDataset()
            ds.name = result['resource']['name']
            ds.id = result['resource']['id']
            ds.source = name
            ds.url = result['link']
            datasets.append(ds)

        return datasets

    def _get_datasets(self, params, jConfig):
        datasets = []
        if params.dataset == 'ntl':
            ntlData = self._get_ntl_data(jConfig)
            print('NTL: '+str(len(ntlData)))
            datasets = datasets + ntlData

        if params.dataset == 'dtg':
            dtgData = self._get_socrata_data(jConfig, 'dtg')
            print('DTG: '+str(len(dtgData)))
            datasets = datasets + dtgData

        if params.dataset == 'scgc':
            scgcData = self._get_socrata_data(jConfig, 'scgc')
            print('SCGC: '+str(len(scgcData)))
            datasets = datasets + scgcData

        if params.dataset == 'all':
            ntlData = self._get_ntl_data(jConfig)
            print('NTL: '+str(len(ntlData)))
            dtgData = self._get_socrata_data(jConfig, 'dtg')
            print('DTG: '+str(len(dtgData)))
            scgcData = self._get_socrata_data(jConfig, 'scgc')
            print('SCGC: '+str(len(scgcData)))
            datasets = datasets + ntlData + dtgData + scgcData

        print('Total: '+str(len(datasets)))
        return datasets

    def _list_results(self, datasets, saveToFile=False, jsonFormat=False):
        fileObj = None
        dt = datetime.datetime.now()
        dtStr = dt.strftime("%Y%m%d%H%M%S")

        fileName = 'dh-datasets-result-'+dtStr
        if jsonFormat:
            fileName = fileName + '.json'
        else:
            fileName = fileName + '.txt'

        if saveToFile:
            fileObj = open(fileName, 'w')
        
        #pylint: disable=unused-variable
        s = ''.join(['-' for i in range(60)])
        print(s)

        if not jsonFormat:
            header = "{}\t{}\t{}\t{}".format('source','id','name','url')
            print(header)
            if saveToFile:
                fileObj.write(header+'\n')

            for dataset in datasets:
                row = str(dataset.source)+'\t'+str(dataset.id)+'\t'+str(dataset.name)+'\t'+str(dataset.url)
                print(row)
                if saveToFile:
                    fileObj.write(row+'\n')
        else:
            jsObj = {}
            for o in datasets:
                if o.source not in jsObj:
                    jsObj[o.source] = []
                oj = {}
                oj['id'] = o.id
                oj['name'] = o.name
                oj['url'] = o.url
                jsObj[o.source].append(oj)

            jsString = json.dumps(jsObj, indent=4)
            print(jsString)
            if saveToFile:
                fileObj.write(jsString+'\n')
        
        print(s)

        if saveToFile:
            fileObj.close()

    def _get_dataset(self, jExpected, dataset):
        ds = []
        for n in jExpected[dataset]:
            d = DHDataset()
            d.name = n['name']
            d.id = n['id']
            d.source = dataset
            ds.append(d)

        return ds

    def _get_expected_datasets(self, dataset, jExpected):
        ds = []
        if dataset == 'all':
            ds = ds + self._get_dataset(jExpected, 'ntl')
            ds = ds + self._get_dataset(jExpected, 'dtg')
            ds = ds + self._get_dataset(jExpected, 'scgc')
        else:
            ds = ds + self._get_dataset(jExpected, dataset)

        return ds
    
    def _get_difference(self, source, list1, list2):
        # set1 = set(( ''.join(str(x.name).lower().split()), ''.join(str(x.source).lower().split()) ) for x in list2 if x.source==source)
        set1 = set(( x.id ) for x in list2 if x.source==source)
        # diffList = [ x for x in list1 if x.source==source and ( ''.join(str(x.name).lower().split()), ''.join(str(x.source).lower().split())) not in set1]
        diffList = [ x for x in list1 if x.source==source and ( x.id ) not in set1]
        return diffList

    def _set_report_line(self, rep, txt):
        return '{}{}\n'.format(rep,txt)

    def _generate_report(self, rep, title, grp, lst, retDatasets, expDatasets):
        if rep == None:
            rep = ''
        s = ''.join(['-' for i in range(60)])
        rep = self._set_report_line(rep, s)
        rep = self._set_report_line(rep, grp.upper())
        ret = [x for x in retDatasets if x.source == grp]
        exp = [x for x in expDatasets if x.source == grp]
        rep = self._set_report_line(rep, 'Returned: ' + str(len(ret))+' Expected: ' + str(len(exp)))
        rep = self._set_report_line(rep, '{}: {}'.format(title, len(lst)))
        rep = self._set_report_line(rep, s)
        i = 1
        for o in lst:
            idStr = '<<NO-ID>>'
            if o.id != None and o.id != '':
                idStr = o.id
            rep = self._set_report_line(rep, '{})\t{}\t{}'.format(i,str(idStr), str(o.name)))
            i = i + 1
        rep = self._set_report_line(rep, '\n')
        return rep

    def _save_report_to_file(self, grp, rep):
        fileObj = None
        dt = datetime.datetime.now()
        dtStr = dt.strftime("%Y%m%d%H%M%S")
        filePath = ''
        if (self._params.fromlambda):
            filePath = '/tmp/'

        fileName = 'dh-datasets-compare-'+grp+'-'+dtStr+'.txt'
        self._filename = fileName
        with open(fileName, 'w') as fileObj:
            fileObj.write(rep)

        return filePath, fileName

    def _save_report_to_s3(self, params, rep):
        dt = datetime.datetime.now()
        dtStr = dt.strftime("%Y%m%d%H%M%S")
        fileName = 'dh-datasets-compare-'+params.dataset+'-'+dtStr+'.txt'

        s3 = boto3.resource('s3')
        encoded_data = rep.encode('utf-8')
        name = '{}{}'.format(params.s3_path,fileName)
        s3.Bucket(params.s3_bucket_name).put_object(Key=name, Body=encoded_data)
        print('S3 Saved. Bucket: {} Path: {}'.format(params.s3_bucket_name, name))


    def _compare_datasets(self, params, retDatasets, expDatasets):
        
        diff = []
        if params.dataset != 'all':
            diff = self._get_difference(params.dataset, expDatasets, retDatasets)
            rep = self._generate_report(None, 'Datasets not found', params.dataset, diff, retDatasets, expDatasets)
            diff = self._get_difference(params.dataset, retDatasets, expDatasets)
            rep = self._generate_report(rep, 'New Datasets', params.dataset, diff, retDatasets, expDatasets)
            print (rep)
            if params.save:
                if params.fromlambda:
                    self._save_report_to_s3(params, rep)
                else:
                    self._save_report_to_file(params.dataset, rep)

        else:
            ds = 'dtg'
            diff = self._get_difference(ds, expDatasets, retDatasets)
            rep = self._generate_report(None, 'Datasets not found', ds, diff, retDatasets, expDatasets)
            diff = self._get_difference(ds, retDatasets, expDatasets)
            rep = self._generate_report(rep, 'New Datasets', ds, diff, retDatasets, expDatasets)

            ds = 'scgc'
            diff = self._get_difference(ds, expDatasets, retDatasets)
            rep = self._generate_report(rep, 'Datasets not found', ds, diff, retDatasets, expDatasets)
            diff = self._get_difference(ds, retDatasets, expDatasets)
            rep = self._generate_report(rep, 'New Datasets', ds, diff, retDatasets, expDatasets)

            ds = 'ntl'
            diff = self._get_difference(ds, expDatasets, retDatasets)
            rep = self._generate_report(rep, 'Datasets not found', ds, diff, retDatasets, expDatasets)
            diff = self._get_difference(ds, retDatasets, expDatasets)
            rep = self._generate_report(rep, 'New Datasets', ds, diff, retDatasets, expDatasets)
            
            print(rep)
            if params.save:
                if params.fromlambda:
                    self._save_report_to_s3(params, rep)
                else:
                    self._save_report_to_file(params.dataset, rep)


    def _do_verification(self, params, datasets):
        if not path.exists(params.expected) or path.isdir(params.expected):
            print('Error: Expected datasets file not found.')
            return None

        jExpected = None
        with open(self._params.expected) as f:
            jExpected = json.load(f)
        f.close()
        
        if jExpected == None:
            print('Error: Invalid expected datasets file.')
            return None

        expDatasets = self._get_expected_datasets(params.dataset, jExpected)
        self._compare_datasets(params, datasets, expDatasets)

    def execute(self):
        self._jConfig = self._validateParams(self._params)
        if self._jConfig == None:
            return

        datasets = self._get_datasets(self._params, self._jConfig)

        if self._params.list:
            self._list_results(datasets, self._params.save, self._params.json)
        else:
            if self._params.expected == None:
                print('Error: Expected datasets file is required.')
                return
            self._do_verification(self._params, datasets)




