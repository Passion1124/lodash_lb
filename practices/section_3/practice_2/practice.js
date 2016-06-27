var _ = require("lodash");
function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var array = object_b.value;
  return _.map(collection_a,function (item) {
    if (array.indexOf(item.key) != -1){
      item.count -= parseInt(item.count / 3);
    }
    return item;
  })
}

module.exports = create_updated_collection;
