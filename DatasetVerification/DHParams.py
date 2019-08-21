import argparse
import os

class DHParams:
    def __init__(self, fromLambda=False):
        self._valid = False
        self._fromLambda = fromLambda

        self._config = None
        self._dataset = 'all'
        self._save = False
        self._expected = None
        self._list = False
        self._json = False

        self._s3_bucket_name = None
        self._s3_path = None

        self._cmdline = not self._detect_environment_var()
        self._message = ''

    @property
    def fromlambda(self):
        return self._fromLambda
    @fromlambda.setter
    def fromlambda(self, value):
        self._fromLambda = value

    @property
    def cmdline(self):
        return self._cmdline
    @cmdline.setter
    def cmdline(self, value):
        self._cmdline = value

    @property
    def valid(self):
        return self._valid
    @valid.setter
    def valid(self, value):
        self._valid = value

    @property
    def config(self):
        return self._config
    @config.setter
    def config(self, value):
        self._config = value

    @property
    def dataset(self):
        return self._dataset
    @dataset.setter
    def dataset(self, value):
        self._dataset = value

    @property
    def save(self):
        return self._save
    @save.setter
    def save(self, value):
        self._save = value

    @property
    def expected(self):
        return self._expected
    @expected.setter
    def expected(self, value):
        self._expected = value

    @property
    def list(self):
        return self._list
    @list.setter
    def list(self, value):
        self._list = value

    @property
    def json(self):
        return self._json
    @json.setter
    def json(self, value):
        self._json = value

    @property
    def message(self):
        return self._message
    @message.setter
    def message(self, value):
        self._message = value

    @property
    def s3_bucket_name(self):
        return self._s3_bucket_name
    @s3_bucket_name.setter
    def s3_bucket_name(self, value):
        self._s3_bucket_name = value

    @property
    def s3_path(self):
        return self._s3_path
    @s3_path.setter
    def s3_path(self, value):
        self._s3_path = value

    def _detect_environment_var(self):
        envVars = ['DHDV_CONFIG','DHDV_DATASET']
        for v in envVars:
            o = os.environ.get(v)
            if (o != None) or (self._fromLambda):
                return True
        return False

    def __str__(self):
        s = 'DHParams(cmdline = {}, config = {}, dataset = {}, expected = {}, fromLambda = {}, json = {}, list = {}, s3_bucket_name = {}, s3_path = {}, save = {}, valid = {})'.format(
            self._cmdline,
            self._config,
            self._dataset,
            self._expected,
            self._fromLambda,
            self._json,
            self._list,
            self._s3_bucket_name,
            self._s3_path,
            self._save,
            self._valid
        )
        return s

    def _validate_cmdline_params(self):
        args = argparse.ArgumentParser(description='DataHub Dataset Verification')
        args.add_argument('-d','--dataset', default='all', help='Dataset: all, ntl, dtg, scgc')
        args.add_argument('-l','--list', action='store_true', default=False, help="List the result of the selected dataset")
        args.add_argument('-j','--json', action='store_true', default=False, help="Format the list result to JSON")
        args.add_argument('-s','--save', action='store_true', default=False, help="Save the result of the selected dataset into a text file")
        args.add_argument('-e','--expected', default=None, help="File of expected datasets")
        args.add_argument('config', help="Datasets configuration file")
        try:
            prms = args.parse_args()
            self._config = prms.config
            self._dataset = prms.dataset
            self._save = prms.save
            self._expected = prms.expected
            self._list = prms.list
            self._json = prms.json

            self._valid = True
        except:
            self._valid = False

    def _validate_environment_params(self):
        self._config = os.environ.get('DHDV_CONFIG')
        self._dataset = 'all' if os.environ.get('DHDV_DATASET') == None else os.environ.get('DHDV_DATASET')
        self._save = False if os.environ.get('DHDV_SAVE') == None else os.environ.get('DHDV_SAVE').lower()=='true'
        self._expected = os.environ.get('DHDV_EXPECTED')
        self._list = False if os.environ.get('DHDV_LIST') == None else os.environ.get('DHDV_LIST').lower()=='true'
        self._json = False if os.environ.get('DHDV_JSON') == None else os.environ.get('DHDV_JSON').lower()=='true'

        if self._config == None:
            self._valid = False
            self._message = 'Environment variable DHDV_CONFIG is mandatory'
            return

        if self._list == False and self._expected == None:
            self._valid = False
            self._message = 'Enviroment variable DHDV_EXPECTED is required for verification'
            return

        if self._fromLambda:
            self._s3_bucket_name = os.environ.get('DHDV_S3_BUCKET_NAME')
            if self._s3_bucket_name == None:
                self._valid = False
                self._message = 'App is running under AWS Lambda, environment variable DHDV_S3_BUCKET_NAME is mandatory'
                return

            self._s3_path = os.environ.get('DHDV_S3_PATH')
            if self._s3_path == None:
                self._valid = False
                self._message = 'App is running under AWS Lambda, environment variable DHDV_S3_PATH is required.'
                return


        self._valid = True
        self._message = ''

    def validate_params(self):
        if self._cmdline:
            self._validate_cmdline_params()
        else:
            self._validate_environment_params()
