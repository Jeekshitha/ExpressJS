var express = require("express");
var app = express();
var port = 8000;
app.get("/",(req,res) => {
    res.send("Hello From ExpressJS");
});
app.get("/Home",(req,res) => {
    res.send("Home Page");
});
app.listen(port,() => {
    console.log("Running in Server 8000");
})
