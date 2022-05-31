const express = require('express'),
      app = express(),
      mysql = require('mysql'),
      bodyParser = require('body-parser');
var router = express.Router();


router.get('/', function(req, res){
    delete req.session.uname;
    delete req.session.pw;
    delete req.session.isLogined;
    req.sessiom.save(function() {
        res.redirect('/');
    })
})

module.exports = router;