var _ = require("lodash");
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = object_b.value;
  return _.chain(collection_a).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    return {
      key:key,
      count:value.length
    }
  }).map(function (value,key) {
    if (array.indexOf(value.key) != -1){
      value.count -= parseInt(value.count / 3);
    }
    return value;
  }).value();
}

module.exports = create_updated_collection;
