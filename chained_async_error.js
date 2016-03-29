Q = require('q');

var getData = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.reject(new Error("Can't get data"));
  }, 200);

  return deferred.promise;
};

var addData = function(input) {
  var deferred = Q.defer();
  setTimeout(function() {
    var local = input + 2;
    deferred.resolve(local);
  }, 200);

  return deferred.promise;
};


getData()
.then(function(value){
  return addData(value);
})
.then(function(added_value){
  console.log(added_value);
}, function(reason){
  console.log(reason);
});
