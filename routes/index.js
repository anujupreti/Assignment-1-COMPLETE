var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sample = mongoose.model('Sample');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
router.get('/sample', function(req, res, next) {
  Sample.find({ _id: { $gt: 2000 } }, function(err, sample){
    if(err){ return next(err); }
    res.json(sample);
  });
});

module.exports = router;