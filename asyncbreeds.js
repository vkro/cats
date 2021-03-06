// asyncBreeds.js
// with Simon Olsen at Lighthouse Labs

const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!')
    if (!error) {
      callback(data);
    } else callback(undefined);
  });
};


// const bombay = breedDetailsFromFile('Bombay', (data) => {
//   console.log('Return Value: ', data)
// });

module.exports = breedDetailsFromFile;