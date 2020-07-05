const { defaults: { moduleFileExtensions } } = require("jest-config")

module.exports = {
  moduleFileExtensions: [ ...moduleFileExtensions, "ejs"],
  transform: {
    "\\.ejs$": "<rootDir>/index.js",
    "\\.js$": "babel-jest"
  }
}
