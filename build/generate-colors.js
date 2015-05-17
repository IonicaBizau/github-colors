// Dependencies
var GithubColors = require ("../lib")
  , output = ""
  , pLanguage = null
  , cpLanguage = null
  ;

for (pLanguage in GithubColors.colors) {
    cpLanguage = Github.colors[pLanguage];
    if (!cpLanguage.color) {
        continue;
    }
    output += "![](http://www.placehold.it/200/" + cpLanguage.color.substring(1) + "/ffffff&text=" + encodeURIComponent(pLanguage) + ")\n";
}

console.log(output);
