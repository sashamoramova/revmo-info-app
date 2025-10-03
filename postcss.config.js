module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 2, // Уровень современности CSS (0-4)
      features: {
        'nesting-rules': true,        // Вложенные стили как в Sass
        'custom-properties': true,    // CSS переменные
        'custom-media-queries': true, // Кастомные медиа-запросы
        'color-functional-notation': true // Современная нотация цветов
      }
    },
    autoprefixer: {
      // Автоматические вендорные префиксы
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead'
      ]
    }
  }
}