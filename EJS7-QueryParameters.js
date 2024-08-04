var express =require("express");
var app = express();
var port = 3000;
app.get('/search',(req,res) => {
    const query =req.query.q;
    res.send(`Search Query: ${query}`);
});
app.listen(port,() =>{
    console.log("Server running in 3000");
});