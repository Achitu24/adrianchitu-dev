const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/startbootstrap-resume-vue' : '/',
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin('./src/fonts.json')
    ]
  }
}