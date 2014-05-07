#!/usr/bin/env shell
echo "Dowloading languages.yml ..."
wget https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml

echo "Converting to JSON ..."
node convert
