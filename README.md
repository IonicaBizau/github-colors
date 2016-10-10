
# GitHub Colors

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/github-colors.svg)](https://www.npmjs.com/package/github-colors) [![Downloads](https://img.shields.io/npm/dt/github-colors.svg)](https://www.npmjs.com/package/github-colors) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> GitHub colors and file extensions mapping

## [Colors](/colors.md)! :art:

If you like to see the language colors collection, click [here](/colors.md).


## :cloud: Installation

```sh
$ npm i --save github-colors
```


## :clipboard: Example



```js
var GitHubColors = require("github-colors");

console.log(GitHubColors.get("C++"));
console.log(GitHubColors.ext("cpp"));
```

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`gh-polyglot`](https://github.com/IonicaBizau/node-gh-polyglot)—Get language stats about GitHub users and repositories.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
