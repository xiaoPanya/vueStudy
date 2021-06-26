module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  //配置的是elementUi 按需引入
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
};
