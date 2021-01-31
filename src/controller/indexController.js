exports.index = (req,res) => {

    var request = require('request');

request('http://api.covidtracking.com/v1/status.json', function (error, response, body) {

    var res = JSON.parse(body)
    console.log('body:', res); 
});
}