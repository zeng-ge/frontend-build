const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const types = require('@babel/types');
const ast = parser.parse(`
    function log(msg){
        console.error(msg);
    }
`);
/**
 * traverse的第二个参数可以配置@babel/types里面定义的Types, 如types.TYPES
 * 如：ArrayExpression  AssignmentExpression等
 *
 * 还可以是enter, exit
 * enter进入节点，exit退出节点
 *
 *
 * 如果乱传会报错，如a(path){}
 * traverse内部会调用types.TYPES来判断类型是否存在
 */
traverse(ast, {
    enter(path){
        if(types.isFunctionDeclaration(path)){
            console.log('enter', path.node.id.name)
        }
    },
    exit(path) {
      if(types.isFunctionDeclaration(path)){
        console.log('exit', path.node.id.name)
      }      
    },
    FunctionDeclaration(path) {
        console.log(path.node.id.name)
    }
});

const result = generator(ast)
console.log(result.code)

