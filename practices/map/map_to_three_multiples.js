'use strict';
var _ = require("lodash");
var map_to_three_multiples = function(collections){
  // return [3,9,15,12,27];

  var result = _.map(collections,algorithm);
  return result;
};

function algorithm(n) {
  return n * 3;
}

module.exports = map_to_three_multiples;
