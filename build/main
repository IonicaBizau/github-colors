#!/usr/bin/env node

// Dependencies
var TinyReq = require("tinyreq")
  , yaml = require("js-yaml")
  , Fs = require("fs")
  , Logger = require("bug-killer")
  , Streamp = require("streamp")
  , Ul = require("ul")
  ;

// Download languages.yml
Logger.log("Downloading the GitHub language colors.");
TinyReq("https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml", function (err, languages) {
    if (err) {
        Logger.log(err, "error");
        return process.exit(1);
    }
    Logger.log("Parsing the yml file.")

    var parsed = yaml.load(languages)
      , extensions = {}
      , cLng = null
      , cLngExts = null
      , output = ""
      , now = new Date()
      , dirName = __dirname + "/../dist/" + now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear() + "/"
      , libDir = __dirname + "/../lib/"
      , colorsStr = new Streamp.writable(dirName + "colors.json")
      , extStr = new Streamp.writable(dirName + "extensions.json")
      , libColorsStr = new Streamp.writable(libDir + "colors.json")
      , libExtStr = new Streamp.writable(libDir + "extensions.json")
      , mdColorsStr = new Streamp.writable(__dirname + "/../colors.md")
      ;

    Object.keys(parsed).forEach(function (cLang) {
        cLng = Ul.merge(parsed[cLang], {
            extensions: []
          , aliases: []
        });
        cLngExts = cLng.aliases.concat(cLng.extensions);
        cLngExts.forEach(function (cExt) {
            extensions[cExt.replace(/^\./, "")] = cLng;
        });
        if (!cLng.color) { return; }
        output += "![](http://www.placehold.it/200/" + cLng.color.substring(1) + "/ffffff&text=" + encodeURIComponent(cLang) + ")\n";
    });

    colorsStr.write(JSON.stringify(parsed, null, 2));
    extStr.write(JSON.stringify(extensions, null, 2));

    libColorsStr.write(JSON.stringify(parsed));
    libExtStr.write(JSON.stringify(extensions));

    mdColorsStr.write(output);

    colorsStr.end();
    extStr.end();
    libColorsStr.end();
    libExtStr.end();

    Logger.log("Done successfully.");
});
