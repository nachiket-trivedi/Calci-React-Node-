var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());


app.post('/calc',function(req,res){
    let eq=req.body.eq;
    try {
        let val=eval(eq)+"";
        console.log(val);
        res.send(val);
    } catch {
        res.send("error");
    }    
});
app.listen(3001);
console.log("Server Listening on port 3001");