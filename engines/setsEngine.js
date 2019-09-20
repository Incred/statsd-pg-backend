function PostgreSQLBackendGaugesEngine() {
	var self = this;
}
PostgreSQLBackendGaugesEngine.prototype.buildQuerries = function(sets, time_stamp) {
	var querries = [];
	 // Iterate on each gauge
    for(var setName in sets) {
      var setCount = sets[setName].values().length;
      if(setCount === 0) {
        continue;
      } else {
          querries.push('INSERT INTO sets_statistics VALUES (' + time_stamp + ',\'' + setName + '\',' + setCount + ');');  
      }
    }
    return querries;
}
exports.init = function() {
	var instance = new PostgreSQLBackendGaugesEngine();
  return instance;
};
