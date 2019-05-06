import utils from './utils'

// const utils = require('./utils')

function query(selector) { // eslint-disable-line
  return $(selector)
}

// eslint-disable-next-line
function loadPerson(){
  utils()
  return Promise.resolve('ok')
}

console.log(window.name) // eslint-disable-line no-console, no-undef

/* eslint-disable */
