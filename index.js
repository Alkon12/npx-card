const { render } = require('prettyjson')
const cowsay = require('cowsay')
const data = require('./lib/data')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}

module.exports = ({ json } = {}) => {
  // Si se especifica --json o -j, devuelve solo JSON.
  if (json) {
    return JSON.stringify(data, null, 2)
  }

  // Por defecto usa prettyjson con cowsay
  const prettyOutput = render(data, renderOpts)
  return cowsay.say({
    text: prettyOutput,
    f: 'tux',
    e: '00',
  })
}
