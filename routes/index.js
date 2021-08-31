var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD application using ExpressJS and MYSQL.' });
});

module.exports = router;
