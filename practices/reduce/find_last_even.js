'use strict';
var _ = require("lodash");
function find_last_even(collection) {
  //在这里写入代码
  var result = _.findLast(collection,function (item) {
    return item % 2 == 0;
  });
  return result;
}

module.exports = find_last_even;
