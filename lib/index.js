var Colors = require("./latest.json");

function GitHubColors() {}

GitHubColors.prototype.get = function (lang, ) {
    return Colors
};

module.exports = new GitHubColors();
