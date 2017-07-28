/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  //console.log('filePath', filePath);
  fs.readFile(filePath, (err, data) => {
    // console.log('data.toString() is', data.toString());
    // console.log('first line of data is', data.toString().split('\n')[0]);
    if (err) {
      callback(err);
    } else {
      callback(err, data.toString().split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
