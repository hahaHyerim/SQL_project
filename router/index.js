const express = require('express'),
      app = express(),
      mysql = require('mysql'),
      bodyParser = require('body-parser');
      
var router = express.Router();

var main = require('./main/main');
var login = require('./login/login');
var logout = require('./logout/logout');

router.use('/', main);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;