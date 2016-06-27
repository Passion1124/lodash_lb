'use strict';
var _ = require("lodash");
function collect_max_number(collection) {
  var result = _.max(collection);
  return result;
}

module.exports = collect_max_number;
