exports.index = (req,res) => {

    var request = require('request');

request('http://api.covidtracking.com/v1/status.json', function (error, response, body) {

<<<<<<< HEAD
    let res  = JSON.parse(body)
    
    for (let i = 1; i < 7; i++) {
=======
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
>>>>>>> develop
         var result = i * res.runNumber
            console.log("DAY = "+i + ":", result)
        }
  });
<<<<<<< HEAD
}
=======
}

>>>>>>> Stashed changes
>>>>>>> develop
