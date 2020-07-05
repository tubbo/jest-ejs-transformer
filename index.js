const loader = require('ejs-loader')

module.exports = {
  process(src) {
    return loader(src)
  }
}
