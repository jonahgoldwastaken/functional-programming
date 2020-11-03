const presetEnv = require('postcss-preset-env')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss(), autoprefixer(), presetEnv()],
}
