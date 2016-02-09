'use strict'

var rgb = require('color-style')
var partial = require('ap').partial
var extend = require('xtend')
var pixels = require('pixel-number')

var defaults = partial(extend, {
  x: 0,
  y: 0
})

module.exports = function boxShadow (data) {
  if (Array.isArray(data)) return data.map(boxShadow).join(', ')

  data = defaults(data)

  return [data.x, data.y, data.blur, data.spread]
    .filter(defined)
    .map(pixels)
    .concat(rgb(data.color))
    .join(' ')
}

function defined (value) {
  return value != null
}
