#!/bin/bash
PACKAGE_FOLDER="_package"
PACKAGE_FILENAME="dhdv_package.zip"

if [ -d "$PACKAGE_FOLDER" ]; then
  echo "Removing existing package folder: "$PACKAGE_FOLDER
  rm -fr _package/
  echo "Removed."
fi

if [ -f "$PACKAGE_FILENAME" ]; then
  echo "Removing previous package file: "$PACKAGE_FILENAME
  rm $PACKAGE_FILENAME
  echo "Removed."
fi

mkdir $PACKAGE_FOLDER
pip install -r requirements.txt --upgrade --target ./_package
cp *.py ./$PACKAGE_FOLDER
cp *.json ./$PACKAGE_FOLDER
cd $PACKAGE_FOLDER
zip -r $PACKAGE_FILENAME .
mv $PACKAGE_FILENAME ..
cd ..
rm -rf ./_package
echo "Created package in "$PACKAGE_FILENAME
