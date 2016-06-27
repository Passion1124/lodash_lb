'use strict';
var _ = require("lodash");
function compare_collections(collection_a, collection_b) {
  var result = _.isEqual(collection_a,collection_b);
  return result;
}

module.exports = compare_collections;


