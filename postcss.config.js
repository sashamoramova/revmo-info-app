module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0, // Изменено с 2 на 0
      features: {
        "nesting-rules": true,
        "custom-properties": true,
        "custom-media-queries": true,
        "color-functional-notation": true,
        "media-query-ranges": true, // Добавлено
      },
    },
    autoprefixer: {
      overrideBrowserslist: ["> 1%", "last 2 versions", "not dead"],
    },
  },
};
