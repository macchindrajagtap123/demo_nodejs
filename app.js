var express=require("express");
var routes = require("./routes/routes.js");
var app=express();
var bodyParser=require("body-parser");
var mysql=require("mysql");

var con=mysql.createConnection({
host:"localhost",
usrr:"root",
password:"",
database:"test"
})

//con.connect();
/*app.get('/user',function(req,res){ 
    res.send(routes.foo(con));
});*/
routes(app,con);

app.listen(300);
console.log("server is running....")