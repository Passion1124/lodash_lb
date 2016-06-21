'use strict';

function compute_average(collection) {
  var result;
  var value = collection[0];
  for (var i = 1; i < collection.length; i++){
    value += collection[i];
  }
  result = value / collection.length;
  return result;
}

module.exports = compute_average;

