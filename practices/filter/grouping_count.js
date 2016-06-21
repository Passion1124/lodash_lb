'use strict';

function grouping_count(collection) {
	var result = {};
	collection.forEach(function (coll) {
    if(!result[coll]){
      result[coll] = 1;
    }else {
      result[coll]++;
    }
  });
	return result;
}

module.exports = grouping_count;
