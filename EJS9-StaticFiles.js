var express =require('express');
var app = express();
var port = 3000;
app.use(express.static('public'));
app.listen(port,() => {
    console.log("Server running in port 3000 : Jeekshitha")

});