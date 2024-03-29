/*!
 * GitHubColors
 *
 * @name GitHubColors
 * @function
 * @return {undefined}
 */
function GitHubColors() {
    this.colors = null;
    this.extensions = null;
}

/**
 * init
 * Inits the GitHub extensions/colors.
 *
 * @name init
 * @function
 * @param {Boolean} ext If `true`, the extensions will be initialized.
 * @return {Object} The `extensions` or `colors` object.
 */
GitHubColors.prototype.init = function (ext) {
    if (ext) {
        return this.extensions = this.extensions || require("./extensions.json");
    }

    return this.colors = this.colors || require("./colors.json");
};

/**
 * get
 * Gets the color object for the provided language.
 *
 * @name get
 * @function
 * @param {String} lang The language to get the color for.
 * @param {Boolean} handleOthers If `false` and the color is not found `undefined` will be returned. Otherwise a gray color will be returned.
 * @return {Object|undefined} The color that was found.
 */
GitHubColors.prototype.get = function (lang, handleOthers) {
    this.init();
    var found = this.colors[lang]
    if (handleOthers) {
        found = found || {}
        found.color = found.color || "#ccc"
    }
    return found
};

/**
 * ext
 * Get the color object for the provided extension.
 *
 * @name ext
 * @function
 * @param {String} ext The extension to get the color for.
 * @param {Boolean} handleOthers If `false` and the color is not found `undefined` will be returned. Otherwise a gray color will be returned.
 * @return {Object|undefined} The color that was found.
 */
GitHubColors.prototype.ext = function (ext, handleOthers) {
    this.init(true);
    var found = this.extensions[ext];
    if (handleOthers) {
        found = found || {}
        found.color = found.color || "#ccc"
    }
    return found;
};

module.exports = new GitHubColors();
