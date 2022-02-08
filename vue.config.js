const path = require('path');

module.exports = () => {
  return {
    publicPath: process.env.NODE_ENV === 'production' ? '/js-boomerang/' : '/',
    lintOnSave: false,
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import '~@/styles/base/_variables.scss';`
        }
      }
    },
    configureWebpack: config => {
      const alias = {
        styles: path.join(__dirname, 'src/styles'),
        assets: path.join(__dirname, 'src/assets'),
        '~': path.join(__dirname, 'src/app')
      };

      const terserOptions = {
        keep_classnames: true,
        keep_fnames: true
      };
      
      config.devServer = {
        headers: {
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'require-corp'
        }
      };

      config.resolve.alias = { ...config.resolve.alias, ...alias };
      config.optimization.minimizer[0].options.terserOptions = {
        ...config.optimization.minimizer[0].options.terserOptions,
        ...terserOptions
      };
    }
  };
};
