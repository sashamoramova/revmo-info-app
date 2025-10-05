// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {},
    'autoprefixer': {
      overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"],
    }
  }
}