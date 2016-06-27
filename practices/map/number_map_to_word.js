'use strict';
var _ = require("lodash");
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  var list = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
  var listArray = _.split(list," ");
  var result = _.map(collection,function (n) {
    return listArray[n%26-1]
  });
  return result;
};

module.exports = number_map_to_word;
