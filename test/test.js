var zeros = require("zeros")
var unpack = require("../unpack.js")

require("tape")("ndarray-unpack", function(t) {

  var x = zeros([5,5])
  x.set(2,3,1)

  t.same(unpack(x), [[0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0]])
  
  t.end()
})