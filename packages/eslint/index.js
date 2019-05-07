import utils from './utils'

export function query (selector) {
  return $(selector)
}

export function loadPerson () {
  utils()
  return Promise.resolve('ok')
}

console.log(window.name + ""); // eslint-disable-line no-console, no-undef, semi, quotes
