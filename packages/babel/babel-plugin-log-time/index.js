module.exports = function({types}) {
  return {
    visitor: {
      ArrowFunctionExpression(path){
        const body = path.get('body')
        var beginDate = types.variableDeclaration('const', [
            types.variableDeclarator(
                types.identifier('beginDate'),
                types.newExpression(
                    types.identifier('Date'),
                    []
                )
            )
        ]);

        const endDate = types.variableDeclaration('const', [
            types.variableDeclarator(
                types.identifier('endDate'),
                types.newExpression(
                    types.identifier('Date'),
                    []
                )
            )
        ])

        const log = types.expressionStatement(
            types.callExpression(
                types.memberExpression(
                    types.identifier('console'), types.identifier('log')
                ),
                [
                    types.binaryExpression(
                        '-',
                        types.identifier('endDate'),
                        types.identifier('startDate')
                    )
                ]
            )
        )

        body.unshiftContainer('body', beginDate);
        body.pushContainer('body', endDate);
        body.pushContainer('body', log);

      }
    }
  }
}
