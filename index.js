/*!
 * flatten-arguments <https://github.com/tunnckoCore/flatten-arguments>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var flatten = require('arr-flatten')
var isArguments = require('is-arguments')
var manageArguments = require('manage-arguments')

module.exports = function flattenArguments (val) {
  var args = isArguments(val) ? manageArguments(val) : manageArguments(arguments)
  return flatten(args)
}
