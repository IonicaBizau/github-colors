# GitHub Colors
GitHub color and file extensions mapping

## [Colors](/colors.md)! :art:
If you like to see the language colors collection, click [here](/colors.md).

## Installation

```sh
$ npm install github-colors
```

## Example

```js
// Dependencies
var GitHubColors = require("github-colors");

// Get the colors by providing the language
console.log(GitHubColors.get("C++"));
// => { extensions:
//    [ '.cpp',
//      '.c++',
//      '.cc',
//      '.cp',
//      '.cxx',
//      '.h',
//      '.h++',
//      '.hh',
//      '.hpp',
//      '.hxx',
//      '.inl',
//      '.ipp',
//      '.tcc',
//      '.tpp' ],
//   aliases: [ 'cpp' ],
//   type: 'programming',
//   ace_mode: 'c_cpp',
//   search_term: 'cpp',
//   color: '#f34b7d' }

// Get the colors by providing the file extension
console.log(GitHubColors.ext("cpp"));
// => { extensions:
//    [ '.cpp',
//      '.c++',
//      '.cc',
//      '.cp',
//      '.cxx',
//      '.h',
//      '.h++',
//      '.hh',
//      '.hpp',
//      '.hxx',
//      '.inl',
//      '.ipp',
//      '.tcc',
//      '.tpp' ],
//   aliases: [ 'cpp' ],
//   type: 'programming',
//   ace_mode: 'c_cpp',
//   search_term: 'cpp',
//   color: '#f34b7d' }
```

## Documentation
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

### `init(ext)`
Inits the GitHub extensions/colors.

#### Params
- **Boolean** `ext`: If `true`, the extensions will be initialized.

#### Return
- **Object** The `extensions` or `colors` object.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
