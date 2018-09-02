var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT ClothesLine Cover' });
});

router.get('/darksky', function(req, res, next) {

  var options = { method: 'GET',
  url: 'https://api.darksky.net/forecast/8c2ce7b392c0c8b8a28fcd9775d2e339/16.416866,120.602395',
  headers: 
   { 'Postman-Token': '012097eb-0d6d-4c39-a43d-4ef5efc67979',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var data = JSON.parse(body);
  
  var arduino = 1;
  // if (data.currently.icon==='rain') {
  //   arduino= 0;
  // }else {
  //   arduino= 1;
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


