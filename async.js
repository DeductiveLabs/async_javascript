var getData = function() {
  setTimeout(function() {
    var local = 10;
    return local;
  }, 200);
};

var value = getData();

console.log(value);
