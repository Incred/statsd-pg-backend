function PostgreSQLBackendCountersEngine() {
	var self = this;
}
PostgreSQLBackendCountersEngine.prototype.buildQuerries = function(userCounters, time_stamp) {
	var querries = [];
	// Iterate on each userCounter
    for(var userCounterName in userCounters) {
      var counterValue = userCounters[userCounterName];
      if(counterValue === 0) {
        continue;
      } else {
        /**********************************************************************
         * Edit following line to custumize where statsd datas are inserted
         *
         * Parameters :
         *    - userCounterName: Counter name
         *    - counterValue: Counter value
         */
        querries.push('INSERT INTO counters_statistics (timestamp, name, value) VALUES (' + time_stamp + ', \'' + userCounterName + '\', ' + counterValue + ');');
      }
    }
    return querries;
}
exports.init = function() {
	var instance = new PostgreSQLBackendCountersEngine();
  return instance;
};
