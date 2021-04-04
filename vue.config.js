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
  },
  pages: {
    front: {
      // 入口文件
      entry: 'src/pages/front/main.js',
      // 入口的html文件位置
      template: 'public/front.html',
      // 入口html文件在构建后的输出文件名
      filename: 'front.html',
      // 网页标题栏标题内容
      title: '活动前台页面',
      // 入口项目所需要的chunk(chunk-vendors：三方库，chunk-common：公共内容，alpha: 入口自己的chunk)
      chunks: ['chunk-vendors', 'chunk-common', 'front']
    },
    back: {
      entry: 'src/pages/back/main.js',
      template: 'public/back.html',
      filename: 'back.html',
      title: '活动后台页面',
      chunks: ['chunk-vendors', 'chunk-common', 'back']
    }
  }
}
