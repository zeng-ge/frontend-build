import utils from './utils'

// const utils = require('./utils')

function query(selector) { // eslint-disable-line
  return $(selector)
}

// eslint-disable-next-line space-before-function-paren,no-unused-vars,space-before-blocks
function loadPerson(){
  utils()
  return Promise.resolve('ok')
}

console.log(window.name) // eslint-disable-line no-console, no-undef

/* eslint-disable */
console.log(abc)
console.log(abc)
