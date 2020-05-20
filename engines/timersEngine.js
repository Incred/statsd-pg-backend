function PostgreSQLBackendGaugesEngine() {
	var self = this;
}

PostgreSQLBackendGaugesEngine.prototype.buildQuerries = function(timers, time_stamp) {

	var querries = [];
	 // Iterate on each gauge
    for(var timerName in timers) {
      var timerValue = timers[timerName];
      if(timerValue.length === 0) {
        continue;
      } else {

        for(valueIndex in timerValue){
          // We insert the raw timers data, you will need to calculate specific stats on the frontend
          querries.push('insert into timers_statistics values (DEFAULT,' + time_stamp + ',\'' + timerName + '\',' + timerValue[valueIndex] + ');'); 
        }
      }
    }

    return querries;
}

exports.init = function() {
	var instance = new PostgreSQLBackendGaugesEngine();
  return instance;
};
