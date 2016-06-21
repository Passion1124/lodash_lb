'use strict';

function collect_max_number(collection) {
  var result = collection[0];
  for (var i = 1; i < collection.length; i++){
    if(result < collection[i]){
        result = collection[i]
    }
  }
  return result;
}

module.exports = collect_max_number;
