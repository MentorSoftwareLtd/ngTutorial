var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/api/auth/signin', function(req, res) {
    res.jsonp({result: 'OK'});
});

router.post('/api/auth/signup', function(req, res) {
    res.jsonp({result: 'OK'});
});

router.post('/api/auth/signout', function(req, res) {
    res.jsonp({result: 'OK'});
});

router.get('/api/patient/get/:id', function(req, res) {
    res.jsonp({result: 'OK'});
});
router.get('/api/patients', function(req, res) {
    res.jsonp({result: 'OK'});
});

router.post('/api/patient/add', function(req, res) {
    res.jsonp({result: 'OK'});
});

router.post('/api/patient/delete', function(req, res ) {
    if (req.body.patient) {
        res.jsonp({result: 'OK'});
    }
});
