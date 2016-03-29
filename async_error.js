Q = require('q');

var getData = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.reject(new Error("Can't get data"));
  }, 200);

  return deferred.promise;
};


getData()
.then(function(value){
  console.log(value);
}, function(reason){
  console.log(reason);
});
