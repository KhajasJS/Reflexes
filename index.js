var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "genetics.html" );
})

app.get('/class', function(req, res){
   res.sendFile(__dirname + "/" + "class.html");
});

serv.listen(process.env.PORT);
console.log("Server is listening on port " + process.env.PORT);
