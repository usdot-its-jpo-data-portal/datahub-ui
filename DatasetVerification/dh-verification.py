import argparse
from DHDatasetVerification import DHDatasetVerification

if __name__ == "__main__":
    args = argparse.ArgumentParser(description='DataHub Dataset Verification')
    args.add_argument('-d','--dataset', default='all', help='Dataset: all, ntl, dtg, scgc')
    args.add_argument('-l','--list', action='store_true', default=False, help="List the result of the selected dataset")
    args.add_argument('-j','--json', action='store_true', default=False, help="Format the list result to JSON")
    args.add_argument('-s','--save', action='store_true', default=False, help="Save the result of the selected dataset into a text file")
    args.add_argument('-e','--expected', default=None, help="File of expected datasets")
    args.add_argument('config', help="Datasets configuration file")
    params = args.parse_args()
    dsv = DHDatasetVerification(params)
    dsv.execute()

