module.exports = function({types}) {
  return {
    visitor: {
      ArrowFunctionExpression(path){
        const body = path.get('body')
        body.unshiftContainer('body', types.expressionStatement(
            types.callExpression(
                types.memberExpression(types.identifier('console'), types.identifier('log')),
                [
                    types.newExpression(
                        types.identifier('Date'),
                        []
                    )
                ]
            )
        ));
        
        body.pushContainer('body', types.expressionStatement(
            types.callExpression(
                types.memberExpression(
                    types.identifier('console'), types.identifier('log')
                ),
                [
                    types.newExpression(
                        types.identifier('Date'),
                        []
                    )
                ]
            )
        ));  
      }
    }
  }
}