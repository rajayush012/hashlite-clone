var express     =    require('express'),
    app         =    express(),
    bodyParser  =    require('body-parser'),
    mongoose    =    require("mongoose"),
    passport    =    require('passport'),
    LocalStrategy =  require('passport-local');

var User = require('./models/user');

mongoose.connect("mongodb://localhost/hashlite_clone_project",{useNewUrlParser: true}); 
app.use(bodyParser.urlencoded({extended:true}));


var port = process.env.PORT || 3000;
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

app.use(require("express-session")({
    secret:"Hola amigas",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    next();
});

app.get("/", (req,res)=>{
    res.render('home.ejs');
});

app.get("/terms", (req,res)=>{
    res.render('terms.ejs');
});


app.get("/privacy",(req,res)=>{
    res.render("privacy.ejs");
});



app.get("/register",(req,res)=>{
    var errorMes="";
    res.render("signup.ejs",{errorMes: errorMes});

});

app.post("/register", (req,res)=> {
    var newUser = new User({
        username: req.body.username,
        fullName: req.body.fullName
    });
    var errorMes="";
    var pass = req.body.password;
    var cpass = req.body.cpassword;
    if(pass===cpass){
    User.register(newUser, pass, (req,res, (err,user)=> {
        if(err){
            errorMes = err.message;
            return res.render('signup.ejs',{errorMes: errorMes});
        }
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/");
        });
    }));}else{
        return res.render('signup.ejs',{errorMes: "Passwords don't match!"});
    }
});

app.get("/signin",(req,res)=>{
    res.render("signin.ejs");
});

app.post("/signin", passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/signin"
}), (req,res)=>{
} );

app.get("/logout", (req,res)=>{
    req.logout();
    res.redirect("/");
});



function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/signin');
}

app.listen(port, ()=>{
    console.log("Server is up on port: "+port);
});