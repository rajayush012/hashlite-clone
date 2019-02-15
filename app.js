var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", (req,res)=>{
    res.render('home.ejs');
});

app.listen(port, ()=>{
    console.log("Server is up on port: "+port);
});