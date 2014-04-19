"use strict"

var dup = require("dup")
var do_unpack = require("./dounpack.js")

module.exports = function unpack(arr) {
  var result = dup(arr.shape)
  do_unpack(arr, result)
  return result
}
