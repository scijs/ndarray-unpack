"use strict"

var dup = require("dup")
var cwise = require("cwise")

var do_unpack = cwise({
  args: ["array", "scalar", "index"],
  body: function unpack(arr, a, idx) {
    var v = a
    for(var i=0; i<idx.length-1; ++i) {
      v = v[idx[i]]
    }
    v[idx[idx.length-1]] = arr
  }
})

module.exports = function unpack(arr) {
  var result = dup(arr.shape)
  do_unpack(arr, result)
  return result
}
