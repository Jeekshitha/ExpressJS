var express = require("express");
var app = express();
var port = 3000;
app.use(express.json());
app.post('/user',(req,res) => {
    res.send(`Hello, ${req.body.name}`);
});
app.listen(port,() => {
    console.log("Server running at 3000 : Jeekshitha");
});