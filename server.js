// Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 8080;

// Route 
app.get('/time_now', function(req, res) {
    res.json({data: Date.now()});
});

// Server
app.listen(port);
console.log('listening on port 8080');