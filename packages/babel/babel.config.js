module.exports = {
  presets: [
    /**
     * modules的值：
     * 默认是auto, 测试发现这个auto就是commonjs
     * cjs就是commonjs
     * false是禁用模块化，此时import不会被编译
     * 由于现在的webpack有了自己的模块化（即ES6)，所以可以关闭babel的模块化
     * "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto"
     * 
     * 
     * useBuiltIns有两个值entry与usage
     * 对于entry, 需要人工import @babel/polyfill，而且只能import一次，多次import会报错
     * 对于usage，不需要人工的import任何辅助API，它会自动判断所需要的api并引入core-js里面对应的文件
     * 比如在User里面用到了Promise,它会自动的添加require("core-js/modules/es6.promise");
     * 选usage时必须安装core-js依赖
     * 
     * loose默认值是false
     * true: 用更简单的方式生成ES5代码
     * false: 生成的代码更复杂
     * 如，对于上面的User类
     * true时：更偏向于ES5的语法
     * User.prototype.say = function(){}
     * false时:
     * _createClass(User, [{
     *  key: 'say',
     *  value: function(){}
     * }])
     * 
     * targets指定代码运行的环境,它的值是一个browserslist-compatible
     * 如果不指定，所有的ES6语法都会转译
     * 如果指定了，比如说chrome: 70，那么chrome70支持的语法不会被转译
     */
    [ 
      '@babel/preset-env', 
      { 
        modules: 'cjs',
        useBuiltIns: 'usage',
        loose: false,
        targets: {
          chrome: "30"
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  test: ['*/*.js'],
  env: {
    sit: {
      presets: [
        ['@babel/env', { 'modules': false }]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ],        
    },
    uat: {},
    prod: {
      presets: [
        ['@babel/env', { 'modules': false }]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties'
      ]
    },
  }
}
