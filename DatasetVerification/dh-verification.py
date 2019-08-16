import argparse
from DHParams import DHParams
from DHDatasetVerification import DHDatasetVerification

def lambda_handler(event, context):
    fromLambda = context != None
    params = DHParams(fromLambda)
    params.validate_params()
    print(params)
    if params.valid:
        dsv = DHDatasetVerification(params)
        dsv.execute()
    else:
        print(params.message)

if __name__ == "__main__":
    lambda_handler(None, None)

