TARGET_FOLDER="./public/visualizations/";
SOURCE_FOLDER="./data/visualizations/";

if [ ! -d "$TARGET_FOLDER" ]; then
  mkdir $TARGET_FOLDER
fi
cp -r $SOURCE_FOLDER/* $TARGET_FOLDER


