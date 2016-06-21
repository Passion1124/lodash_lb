'use strict';
var rank_asc = function(collection){
  // return [6,5,4,3,2];
  var result = collection.sort().reverse();
  return result;
};

module.exports = rank_asc;
