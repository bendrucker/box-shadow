'use strict'

var test = require('tape')
var boxShadow = require('./')

test(function (t) {
  t.equal(boxShadow({
    x: 1,
    y: 2,
    blur: 3,
    spread: 4,
    color: [5, 6, 7, 0.8]
  }), '1px 2px 3px 4px rgba(5,6,7,0.8)', 'all values')

  t.equal(boxShadow({
    x: 1,
    y: 2,
    blur: 3,
    color: [4, 5, 6, 0.7]
  }), '1px 2px 3px rgba(4,5,6,0.7)', 'no spread')

  t.equal(boxShadow({
    x: 1,
    y: 2,
    blur: 3,
    color: [4, 5, 6]
  }), '1px 2px 3px rgba(4,5,6,1)', 'no alpha')

  t.equal(boxShadow({
    x: 1,
    y: 2,
    blur: 3,
    color: 'red'
  }), '1px 2px 3px red', 'simple color')

  t.equal(boxShadow({
    x: '1em',
    y: 2,
    blur: 3,
    color: 'red'
  }), '1em 2px 3px red', 'ems')

  t.equal(boxShadow([
    {
      x: 1,
      y: 2,
      color: 'red'
    },
    {
      x: 3,
      y: 4,
      color: 'blue'
    }
  ]), '1px 2px red, 3px 4px blue', 'multiple')

  t.end()
})
