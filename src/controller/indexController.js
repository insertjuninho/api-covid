exports.index = (req,res) => {

    var request = require('request');

request('http://api.covidtracking.com/v1/status.json', function (error, response, body) {

<<<<<<< Updated upstream
    var res = JSON.parse(body)
    console.log('body:', res); 
});
}
=======
    let res  = JSON.parse(body)
    let count;
    let val;
    for (let i = count; i < val; i++) {
         var result = i * res.runNumber
            console.log("DAY = "+i + ":", result)
        }
  });
}

>>>>>>> Stashed changes
