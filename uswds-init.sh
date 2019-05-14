IMG_DEST="./img/";
FONTS_DEST="./fonts/";

if [ ! -d "$IMG_DEST" ]; then
  mkdir $IMG_DEST
fi
cp -r ./node_modules/uswds/dist/img/* $IMG_DEST

if [ ! -d "$FONTS_DEST" ]; then
  mkdir $FONTS_DEST
fi
cp -r ./node_modules/uswds/dist/fonts/* $FONTS_DEST

