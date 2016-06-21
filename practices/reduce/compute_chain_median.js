'use strict';

function compute_chain_median(collection) {
  var arr = collection.split("->");
  var array = arr.sort(function (a,b) {
    return a - b;
  });
  if(array.length % 2 == 0){
    var n = array.length/2-1;
  }else {
    var n = array.length/2;
  }
  var result = (parseInt(array[n])+parseInt(array[n+1]))/2;
  return result;
}

module.exports = compute_chain_median;
