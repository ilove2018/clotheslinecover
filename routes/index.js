var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT ClothesLine Cover' });
});

router.get('/darksky', function(req, res, next) {

  var options = { method: 'GET',
  url: 'https://api.darksky.net/forecast/ad9a3a116097f83ba241481604a66fb9/16.4189,120.5934',
  headers: 
   { 'Postman-Token': 'd6d511c7-3d35-4b04-b9e0-86f1779dfe83',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  var data = JSON.parse(body);
  
  // var arduino = 'cover';
  // if (data.currently.icon==='rain') {
  //   arduino='cover';
  // }else {
  //   arduino='uncover';
  // }

  // res.json(arduino);
  res.json({
    timezone: data.timezone,
    current: data.currently.icon,
    hourly: data.hourly.icon
  });
  // res.json(JSON.stringify(body.currently.summary));
  // console.log(data.currently.summary);
  // // console.log(body);
});
});

module.exports = router;


