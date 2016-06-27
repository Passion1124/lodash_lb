'use strict';
var _ = require("lodash");
function find_first_even(collection) {
  //在这里写入代码
  var result = _.find(collection,function (item) {
    return item % 2 == 0;
  });
  return result;
}

module.exports = find_first_even;

