var baked = require("cwise-bake")({ args: ["array", "scalar", "index"],
  body: function unpack(arr, a, idx) {
    var v = a, i
    for(i=0;i<idx.length-1;++i) {
      v=v[idx[i]]
    }
    v[idx[idx.length-1]]=arr
  }
})


console.log("module.exports=require('cwise-compiler')(" + JSON.stringify(baked) + ")")