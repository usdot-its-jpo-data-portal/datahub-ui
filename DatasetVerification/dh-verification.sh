# ITS DataHub
# Dataset Verification
#  - Validates the returned dataset against an expected template document.
#  - The parameters can be passed as command line arguments
#  - The parameters can be passed as environment variables

# Configuration file in JSON format that contains the connection information to the datasources.
# *Mandatory
export DHDV_CONFIG=config.json

# Dataset name.
# Options: all, dtg, ntl, scgc
# *Mandatory
export DHDV_DATASET=all

# Option to display the dataset
# Default: False
# Optional
export DHDV_LIST=False

# Format the display of the dataset into JSON
# * This option needs to be used together with DHDV_LIST=True
# Default: False
# Optional
export DHDV_JSON=False

# Saves the return of the list or the comparison into a text file.
# Default: False
# Optional
export DHDV_SAVE=False

# Document in JSON format that contains the expected return of the datasets
# * This document can be generated using:
#   DHDV_LIST=True, DHDV_JSON=True, DHDV_SAVE=True
export DHDV_EXPECTED=expected-datasets-doc.json

python dh-verification.py
