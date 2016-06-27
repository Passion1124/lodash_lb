'use strict';
var _ = require("lodash");
function map_to_even(collection){
  // return [2,4,6,8,10];
  var result = _.map(collection,algorithm);
  return result;
}
function algorithm(n) {
  return n * 2;
}
module.exports = map_to_even;
