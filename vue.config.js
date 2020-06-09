const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_APP_PACKAGE_JSON: '"' + escape(JSON.stringify(require('./package.json'))) + '"'
        }
      })
    ]
  },
  devServer: {
    proxy: {
      '/apicc/*' : {
        target: process.env.VUE_APP_CC_API_URL,
        secure: false
      },
      '/api/*' : {
        target: process.env.VUE_APP_WEB_API_URL,
        secure: false
      },
      '/simages' : {
        target: process.env.VUE_APP_S3IMAGES_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/simages': ''
        }
      }
    }
  }
}
