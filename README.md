# GitHub Colors [![Support this project][donate-now]][paypal-donations]
GitHub colors and file extensions mapping

## [Colors](/colors.md)! :art:

If you like to see the language colors collection, click [here](/colors.md).

## Installation

```sh
$ npm i github-colors
```

## Example

```js
var GitHubColors = require("github-colors");

console.log(GitHubColors.get("C++"));
console.log(GitHubColors.ext("cpp"));
```

## Documentation

### `init(ext)`
Inits the GitHub extensions/colors.

#### Params
- **Boolean** `ext`: If `true`, the extensions will be initialized.

#### Return
- **Object** The `extensions` or `colors` object.

### `get(lang, handleOthers)`
Gets the color object for the provided language.

#### Params
- **String** `lang`: The language to get the color for.
- **Boolean** `handleOthers`: If `false` and the color is not found `null` will be returned. Otherwise a gray color will be returned.

#### Return
- **Object** The color that was found.

### `ext(ext, handleOthers)`
Get the color object for the provided extension.

#### Params
- **String** `ext`: The extension to get the color for.
- **Boolean** `handleOthers`: If `false` and the color is not found `null` will be returned. Otherwise a gray color will be returned.

#### Return
- **Object** The color that was found.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`gh-polyglot`](https://github.com/IonicaBizau/node-gh-polyglot)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md