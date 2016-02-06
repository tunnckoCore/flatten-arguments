/*!
 * flatten-arguments <https://github.com/tunnckoCore/flatten-arguments>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var flatten = require('./index')

function flattenArguments () {
  return flatten(arguments)
}

function flattenMultiple () {
  return flatten.apply(this, arguments)
}

test('should be able to accept `arguments` object directly', function (done) {
  var args = flattenArguments(1, ['a', 'b'], 2, 3, ['c', ['d'], 4, 'e'], 5)
  test.deepEqual(args, [1, 'a', 'b', 2, 3, 'c', 'd', 4, 'e', 5])
  done()
})

test('should be able to accept multiple arguments and flatten', function (done) {
  var args = flattenMultiple(1, ['a', 2, 'b'], 3, ['c', 4], {foo: 'bar'})
  test.deepEqual(args, [1, 'a', 2, 'b', 3, 'c', 4, {foo: 'bar'}])
  done()
})
