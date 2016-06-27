'use strict';
var _ = require("lodash");
function compute_chain_median(collection) {
  var arr = collection.split("->");
  var array = _.map(arr,function (item) {
    return parseInt(item);
  });
  var myarray = _.orderBy(array);
  if(myarray.length % 2 == 0){
    var n = myarray.length/2-1;
  }else {
    var n = myarray.length/2;
  }
  var result = (parseInt(myarray[n])+parseInt(myarray[n+1]))/2;
  return result;
}

module.exports = compute_chain_median;
