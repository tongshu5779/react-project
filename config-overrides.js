const {injectBabelPlugin} = require('react-app-rewired');
module.exports = function override(config, env) {
  // 使用babal-plugin-import针对antd-mobile按需打包(根据import的模块打包), 同时自动打包组件的css样式
  config = injectBabelPlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config);
  return config;
};