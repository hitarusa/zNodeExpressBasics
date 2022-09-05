var express = require('express');
var ejs = require('ejs');           //EJSに必要。
var bodyParser = require('body-parser'); //POSTのボディ(パラメータ)取得に必要。
var session = require('express-session');//セッションに必要。

var app = express();
app.engine('ejs', ejs.renderFile); //レンダリング・エンジンの設定。EJS使用に必要。

app.use(express.static('public')); // public folderのCSSに対する静的ルーティングを追加。CSSに必要。
app.use(bodyParser.urlencoded({extended : false})); //POSTのボディ(パラメータ)取得に必要。
var session_cfg = {
    secret : 'keyboard cat',
    resave : false,
    saveUninitialized : false,
    cookie : { maxAge : 60 * 60 * 1000 }
}
app.use(session(session_cfg));  //セッションに必要。

app.get('/', (req, res) => {
//    res.send("Hello"); // Templateを使わない場合にはこれでレスポンス可能。
    var cntr = 0;
    var hdrObj = req.headers;
    var parmObj = req.query;
    cntr = updateSession(cntr, req.session.counter);
    req.session.counter = cntr;
    res.render('index.ejs', {counter : cntr, headersObj : hdrObj, mtd : 'GET', parametersObj : parmObj});
});

app.get('/echo', (req, res) => {
    var cntr = 0;
    var hdrObj = req.headers;
    var parmObj = req.query;
    cntr = updateSession(cntr, req.session.counter);
    req.session.counter = cntr;
    res.render('index.ejs', {counter : cntr, headersObj : hdrObj, mtd : 'GET', parametersObj : parmObj});
});

app.post('/echo', (req, res) => {
    var cntr = 0;
    var hdrObj = req.headers;
    var parmObj = req.body;
    cntr = updateSession(cntr, req.session.counter);
    req.session.counter = cntr;
    res.render('index.ejs', {counter : cntr, headersObj : hdrObj, mtd : 'POST', parametersObj : parmObj});
});

app.listen(3000, () => {
    console.log('Start server port : 3000');
})

function updateSession(cntr, ssnCntr){    //Session Counterのアップデート関数
    if (ssnCntr != undefined){
        cntr = ssnCntr; 
    }

    ssnCntr = ++cntr;
    return cntr;
}
