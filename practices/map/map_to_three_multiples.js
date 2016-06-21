'use strict';
var map_to_three_multiples = function(collections){
  // return [3,9,15,12,27];
  var resule = [];
  for (var i = 0; i < collections.length; i++){
    resule.push(collections[i]*3);
  }
  return resule;
};

module.exports = map_to_three_multiples;
