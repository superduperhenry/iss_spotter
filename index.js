const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  // success, print out the deets!
  printPassTimes(passes);
});