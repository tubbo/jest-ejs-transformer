# jest-ejs-transformer

Use [EJS](https://ejs.co/) templates in your [Jest](https://jestjs.io/) tests.

## Installation

    yarn add jst-ejs-transformer

## Usage

In your **jest.config.js**:

```javascript
const { defaults: { moduleFileExtensions } } = require("jest-config")

module.exports = {
  moduleFileExtensions: [ ...moduleFileExtensions, "ejs"],
  transform: {
    "\\.ejs$": "jest-ejs-transformer",
    //"\\.js$": "babel-jest" (optional)
  }
}
```

You can now `import` or `require` an EJS template as a module:

```javascript
const Template = require("./template/ejs")

module.exports = {
  render(props) {
    return Template(props)
  }
}
```

## Thanks!

Special thanks to **Matt Rose** and **Roman Loktev** for the code behind
this package. I just copied their code from [StackOverflow](https://stackoverflow.com/questions/44220227/jest-testing-with-require-modules-ejs-loader)
and put it in a reusable module.
