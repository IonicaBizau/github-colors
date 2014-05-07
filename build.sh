#!/usr/bin/env bash
echo "Dowloading languages.yml ..."
wget https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml -q

echo "Converting to JSON ..."
node convert

echo "GitHub mappings were saved in github-colors.json file."
echo "Removing initial yml file ..."
rm languages.yml

echo "Done"
