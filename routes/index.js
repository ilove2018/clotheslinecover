var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT ClothesLine Cover' });
});

router.get('/darksky', function(req, res, next) {

  var options = { method: 'GET',
  url: 'https://api.darksky.net/forecast/ad9a3a116097f83ba241481604a66fb9/16.416866,120.602395',
  headers: 
   { 'Postman-Token': 'dfa15709-39ae-467f-858e-467378da7bd1',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var data = JSON.parse(body);
  
  var arduino = 1;
  // if (data.currently.icon==='rain') {
  //   arduino= 1;
  // }else {
  //   arduino= 0;
  // }

  console.log('Data sent: ', arduino)
  res.json(arduino);
  // res.json({
  //   timezone: data.timezone,
  //   current: data.currently.icon,
  //   hourly: data.hourly.icon
  // });
  // res.json(JSON.stringify(body.currently.summary));
  // console.log(data.currently.summary);
  // console.log(arduino);
});
});

module.exports = router;


