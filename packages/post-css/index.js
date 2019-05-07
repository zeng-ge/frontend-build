var postcss = require('postcss');

const displayFlexes = ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex']
const flex = ['-webkit-box-flex', '-moz-box-flex', '-webkit-flex', '-ms-flex']
function displayFlexHandler(declear){
  const rule = declear.parent
  if (declear.value === 'flex') {
    displayFlexes.forEach(value => {
      rule.append({
        prop: 'display',
        value: value
      })
    });
  }
}
function flexValueHandler(declear) {
  const rule = declear.parent
  displayFlexes.forEach(flex => {
    rule.append({
      prop: flex,
      value: declear.value
    })
  });
}
const flexPlugin = function(root) {
  root.walkRules(function(rule) {
    rule.walkDecls(/^display?/, displayFlexHandler);
    rule.walkDecls(/^flex?/, flexValueHandler);
  });
};
// module.exports = postcss.plugin('postcss-test-plugin', function(){return flexPlugin;});
const css = `
  .header{
    display: flex;
    flex-direction: row;
  }
  .header .column{
    flex: 1;
  }
`

const autoprefixer = require('autoprefixer')({
  browsers: [
    'last 5 versions',//支持最新的5个版本
    'not ie <= 8',//IE8以下不支持
  ]
})

postcss(autoprefixer).process(css).then(result => {
  console.log(result.css)
})

postcss([flexPlugin]).process(css).then(result => {
  console.log(result.css)
})
