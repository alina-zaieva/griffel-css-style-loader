# griffel-css-style-loader

When [Griffel's CSS extraction](https://griffel.js.org/react/css-extraction/with-webpack) is used together with `style-loader`, CSS rules are not ordered correctly. This manifests in various UI issues, an example in this repo is `Button` with `appearance="subtle"` still looking like a default button.

## Steps

1. Run `npm install`.
2. Run `npm run start` to start the app.
3. Change the value of `EXTRACT_CSS` constant to compare how UI looks without CSS extraction.
