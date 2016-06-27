'use strict';
var _ = require("lodash");
function compute_average(collection) {
  var result = _.mean(collection);
  return result;
}

module.exports = compute_average;

