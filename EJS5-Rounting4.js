var express = require("express");
var app = express();
var port = 8000;
app.get("/",(req,res) => {
    res.send("Hello From ExpressJS");
});
app.get("/About",(req,res) => {
    res.send("Displaying the About page");
});
app.get("/Contact",(req,res) => {
    res.send("Contact Page");
});
app.get("/Home",(req,res) => {
    res.send("Home Page");
});
app.listen(port,() => {
    console.log("Running in Server 8000");
})
