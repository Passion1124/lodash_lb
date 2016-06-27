var _ = require("lodash");
function count_same_elements(collection) {
  //在这里写入代码
  var object = {};
  var array = _.chain(collection).groupBy(function (item) {
    return item;
  }).map(function (value,key) {
    var count  = value.length;
    var keys = key;
    if(key.indexOf("-") != -1){
      keys = key.substring(0,key.indexOf("-"));
      count = key.substring(key.indexOf("-") + 1);
    }
    if(key.indexOf(":") != -1){
      keys = key.substring(0,key.indexOf(":"));
      count = key.substring(key.indexOf(":") + 1);
    }
    if (key.indexOf("[") != -1){
      keys = key.substring(0,key.indexOf("["));
      count = key.substring(key.indexOf("[") + 1,key.length - 1);
    }
    if(!object[keys]){
      object[keys] = parseInt(count);
    }else {
      object[keys] += parseInt(count);
    }
    return {
      name:keys,
      summary: parseInt(count)
    }
  }).value();
  var result = [];
  _.forIn(object,function (value,key) {
    result.push({name:key,summary:value});
  });
  return result;
}

module.exports = count_same_elements;
