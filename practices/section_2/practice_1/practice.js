function count_same_elements(collection) {
  //在这里写入代码
  /*------------------------------方法一---------------------------------*/
  // var result = [];
  // var array = [];
  // var num = 0;
  // for (var i = 0; i < collection.length; i++){
  //   var count = 0;
  //   for (var j = 0 ; j < collection.length; j++){
  //     if(collection[i] == collection[j]){
  //       count++;
  //     }
  //   }
  //   array.push([collection[i],count]);
  //   num+=count;
  //   i = num;
  // }
  // for (var i = 0 ; i < array.length; i ++){
  //   result.push({key:array[i][0],count:array[i][1]})
  // }
  // return result;
  
  /*-----------------------------方法二----------------------------------*/
  var result = [];
  var obj = {};
  for (var i = 0; i < collection.length; i++){
    if(!obj[collection[i]]){
      obj[collection[i]] = 1;
    }else {
      obj[collection[i]]++;
    }
  }
  for (var i in obj){
    result.push({key:i,count:obj[i]})
  }
  return result;
}

module.exports = count_same_elements;
