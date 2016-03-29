var getData = function() {
  setTimeout(function() {
    var local = 10;
    return local;
  }, 200);
};
var getMoreData = function() {
  setTimeout(function() {
    var local = 20;
    return local;
  }, 200);
};

var value1 = 0, value2 = 0;
value1 = getData();
value2 = getMoreData();
added_value = value1 + value2;

console.log(added_value);
