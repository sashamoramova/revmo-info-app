module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 2,
      features: {
        "nesting-rules": true,
        "custom-properties": true,
        "custom-media-queries": true,
        "color-functional-notation": true,
      },
    },
    autoprefixer: {
      overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"],
    },
  },
};
