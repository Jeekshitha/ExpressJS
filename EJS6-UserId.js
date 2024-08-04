var express = require("express");
var app = express();
var port = 7000;
app.get("/user/:id",(req,res) => {
    res.send(`User id : ${req.params.id}`);
});
app.listen(port,() => {
    console.log("Serever running at 7000: Jeekshitha");
});