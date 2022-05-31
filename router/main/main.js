const express = require('express'),
      app = express(),
      mysql = require('mysql'),
      bodyParser = require('body-parser');
var router = express.Router();

router.get('/', function(req, res){
    /* 여기에 로그인이 안 되었을 시 로그인 창으로 넘어가는 코드 작성 */
    /*
    if (req.session.isLogined) { // 로그인이 된 경우 괄호 안에 True가 들어감
        res.render('index');
    } else { // 아닌 경우 login 페이지가 나오도록 리다이렉트
        res.redirect('http://localhost/login');
    }
    */
    res.render('index');
})

module.exports = router;