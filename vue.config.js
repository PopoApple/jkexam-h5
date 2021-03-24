const path = require('path')
module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            'tabs-default-color': '#00a64a',
            'dialog-confirm-button-text-color': '#00a64a',
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            //hack: `true; @import "your-less-file-path.less";`,
          },
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/assets/styles/vars.less')]
    },
  },
  devServer: {
    open: true,
    inline: true,
    host: '0.0.0.0', // 允许外部ip访问
    port: 8000, // 端口
    https: false, // 启用https
    proxy: {
      '/api/': {
        target: 'http://192.168.0.222:9180',
      },
      // '/apiBid/': {
      //   target: 'http://bid.conschina.com',
      //   pathRewrite: {
      //     '^/apiBid/': '/'
      //   }
      // },
    }
  }
}
