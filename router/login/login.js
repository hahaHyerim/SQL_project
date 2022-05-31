const express = require('express'),
      app = express(),
      mysql = require('mysql'),
      bodyParser = require('body-parser');
var router = express.Router();

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

/* 여기서부터 로그인 관련 코드 
var options = {
    host: '34.64.96.148',
    user: 'cc',
    password: '0000',
    database: 'sql_db'
}
var sessionStore = new MySQLStore(options);
*/


router.get('/', function(req, res){
    res.render('loginPage');
})

module.exports = router;