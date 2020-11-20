const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  compress: false,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:8]",
  }
})