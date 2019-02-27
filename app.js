var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res)=>{
    res.render('home.ejs');
});

app.get("/test", (req,res)=>{
    res.render('index.ejs');
});


app.get("/signin",(req,res)=>{
    res.render("signin.ejs");
});

app.get("/privacy",(req,res)=>{
    res.render("privacy.ejs");
});

app.listen(port, ()=>{
    console.log("Server is up on port: "+port);
});