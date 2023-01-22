module.exports = {
  publicPath: '',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/global.scss";',
      },
    },
  },
};
