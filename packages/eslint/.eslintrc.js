module.exports = {
  /**
   * babel-eslint能识别ES6语法，如未加它之前连class里面加属性都会报错
   * prettier只是格式化文件，如处理逗号，分号，tab的长度等等
   * eslint更复杂，它会分析语法，判断参数是否使用，未定义的变量等等
   */
  parser: 'babel-eslint',
  extends: [
    /**
     * 配置eslint-config-prettier防止prettier与eslint发现同样的问题，报两个错出来
     *
     * 用eslint跑prettier时发现Person.js错误怎么样也解决不了，决定还是分开跑
     * 先跑prettier，再跑lint
     *
     * 'plugin:prettier/recommended'同时使用config与plugin
     */
    // 'prettier',
    'standard'
  ],
  /**
   * 用eslint来跑prettier
   * eslint-plugin-prettier
   */
  // plugins: ['prettier'],
  // rules: {
  //   'prettier/prettier': 'error'
  // }
  rules: {
    /**
     * 不允许console出现，console.log报错,但是允许console.error
     */
    'no-console': ['error', {allow: ['error']}]
  }
}
