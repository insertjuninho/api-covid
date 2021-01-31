exports.index = (req,res) => {

    var request = require('request');

request('http://api.covidtracking.com/v1/status.json', function (error, response, body) {

    let res  = JSON.parse(body)
    
    for (let i = 1; i < 7; i++) {
         var result = i * res.runNumber
            console.log("DAY = "+i + ":", result)
        }
  });
}