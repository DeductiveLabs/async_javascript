Q = require('q');

var getData = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.reject(new Error("Can't get data"));
  }, 200);

  return deferred.promise;
};

var getMoreData = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    var local = 20;
    deferred.resolve(local);
  }, 200);

  return deferred.promise;
};

Q.all([
  getData(),
  getMoreData()
]).then(function(data){
  var added_value = data[0] + data[1];
  console.log(added_value);
}, function(reason){
  console.log(reason);
});

