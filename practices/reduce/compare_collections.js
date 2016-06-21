'use strict';

function compare_collections(collection_a, collection_b) {
  var result = false;
  for (var i = 0 ; i < collection_a.length; i++){
    if(collection_a[i] == collection_b[i]){
      result = true;
    }else {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = compare_collections;


