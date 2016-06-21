'use strict';
var number_map_to_word = function(collection){
  // return ['a','b','c','d','e'];
  var result = [];
  function i2s(i) {
    var s = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var sArray=s.split(" ");
    if (i<1) return "";

    if (parseInt((i/26)+"")==0) return sArray[i%26-1];
    else {
      if (i%26==0) return (i2s(parseInt((i/26)+"")-1))+sArray[26-1];
      else return sArray[parseInt((i/26)+"")-1]+sArray[i%26-1];
    }
  }
  for (var i = 0 ; i < collection.length; i++){
    result.push(i2s(collection[i]));
  }
  return result;
};

module.exports = number_map_to_word;
