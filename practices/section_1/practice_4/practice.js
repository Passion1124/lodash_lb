var _ = require("lodash");
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var array = [];
    _.forEach(collection_a,function (item) {
    array.push(item.key);
  });
  var result = _.intersection(array,object_b.value);
  return result;
}

module.exports = collect_same_elements;
