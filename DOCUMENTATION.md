## Documentation

You can see below the API reference of this module.

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
- **Boolean** `handleOthers`: If `false` and the color is not found `undefined` will be returned. Otherwise a gray color will be returned.

#### Return
- **Object** The color that was found.

### `ext(ext, handleOthers)`
Get the color object for the provided extension.

#### Params

- **String** `ext`: The extension to get the color for.
- **Boolean** `handleOthers`: If `false` and the color is not found `undefined` will be returned. Otherwise a gray color will be returned.

#### Return
- **Object** The color that was found.

