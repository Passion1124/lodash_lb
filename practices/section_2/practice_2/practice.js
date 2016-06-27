var _ = require("lodash");
function count_same_elements(collection) {
  //在这里写入代码
  return _.chain(collection).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    var count  = value.length;
    var keys = key;
    if(key.indexOf("-") != -1){
      keys = key.substring(0,key.indexOf("-"));
      count = key.substring(key.indexOf("-") + 1);
    }
    return {
      key:keys,
      count: parseInt(count)
    }
  }).value();
}

module.exports = count_same_elements;
