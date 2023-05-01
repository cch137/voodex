const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    plugins: [],
  },
  pages: {
    
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
        args[0].meta = [
          { charset: 'UTF-8' },
          { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
          { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' },
          { name: 'author', content: 'cch137' },
          { name: 'description', content: 'Voodex' },
          { name: 'keywords', content: 'voodex' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Voodex' },
          { name: 'description', content: 'Voodex' },
          { property: 'og:image', content: 'https://voodex.netlify.app/banner.png' },
        ];
        return args;
    });
    config
      .plugin('copy')
      .tap(args => {
        if (args[0] && args[0].push) {
          args[0].push({
            from: 'public/*.html',
            to: '[name].[ext]',
            toType: 'template',
            ignore: ['index.html'] // 忽略index.html文件
          });
        }
        return args;
    });
  },
  transpileDependencies: true
})
