'use strict';
var _ = require("lodash");
function collect_min_number(collection) {
  var result = _.min(collection);
  return result;
}

module.exports = collect_min_number;

