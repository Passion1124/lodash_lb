'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var result = collection[0];
  for (var i = 1 ; i < collection.length; i++){
    result += collection[i];
  }
  return result;
}

module.exports = calculate_elements_sum;

