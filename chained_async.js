var getData = function() {
  setTimeout(function() {
    var local = 10;
    return local;
  }, 200);
};
var addData = function(input) {
  setTimeout(function() {
    var local = input + 2;
    return local;
  }, 200);
};

var value = 0;
value = getData();
added_value = addData(value);

console.log(added_value);
