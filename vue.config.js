module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
        .oneOf('ico')
            .resourceQuery(/ico/)
            .use('babel-loader')
                .loader('babel-loader')
                .end()
            .use('vue-svg-loader')
                .loader('vue-svg-loader')
                .end()
            .end()
        .oneOf('url')
            .use('url-loader')
                .loader('url-loader')
                .end()

  },
};