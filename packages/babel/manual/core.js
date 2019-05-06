const babel  = require('@babel/core')
const types = require('@babel/types')
const tpl = `
    const log = msg => {
        console.log(msg);
    }
`
/**
 * 默认配置：
 *
 *   babelrc: false,
     configFile: false,
     passPerPreset: false,
     envName: 'development',
     plugins: [],
     presets: [],
     parserOpts:
     { sourceType: 'module', sourceFileName: undefined, plugins: [] },
     generatorOpts:
     { filename: undefined,
            auxiliaryCommentBefore: undefined,
            auxiliaryCommentAfter: undefined,
            retainLines: undefined,
            comments: true,
            shouldPrintComment: undefined,
            compact: 'auto',
            minified: undefined,
            sourceMaps: false,
            sourceRoot: undefined,
            sourceFileName: 'unknown' } },


    core:
    1) 用@babel/parse将code解析成ast
    2) 将plugins里面的vistor合并到一个对象{}
    3) 调用@babel/traverse(ast, vistor)来遍历ast
    4) 调用@babel/generator来生成代码


    解析配置时会先加载presets, 读取其plugins

    plugin1: { Identifier: function(){console.log('a')} }
    plugin2: { Identifier: function(){console.log('b')} }
    plugin3: { ArrowFunctionExpression: function(){} }
    合并的对象饮食所有非同名key,同名的合进enter
    同名的函数合并进enter里面，判断类型执行
    合并之后的结果为：
    {
        enter: function(){
            //function console.log('a')
            //function console.log('b')
        },
        ArrowFunctionExpression: function(){}
    }
 */

const result = babel.transformSync(tpl, {
    presets: [],//require('@babel/preset-env')
    plugins: [
        require("babel-plugin-log-time"),
        {
            visitor: {
                ArrowFunctionExpression(path){
                    path.arrowFunctionToExpression()
                }
            }
        }
    ]
})
console.log(result.code)
