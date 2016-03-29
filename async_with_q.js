Q = require('q');

var getData = function() {
  var deferred = Q.defer();
  setTimeout(function() {
    var local = 10;
    deferred.resolve(local);
  }, 200);

  return deferred.promise;
};


getData()
.then(function(value){
  console.log(value);
});
