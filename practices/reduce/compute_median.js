'use strict';

function compute_median(collection) {
  //在这里写入代码
  var array = collection.sort(function (a,b) {
    return a - b;
  });
  if(array.length % 2 == 0){
    var n = array.length/2-1;
    var result = (parseInt(array[n])+parseInt(array[n+1]))/2;
  }else {
    var n = parseInt(array.length/2);
    var result = parseInt(array[n]);
  }
  return result;
}

module.exports = compute_median;


