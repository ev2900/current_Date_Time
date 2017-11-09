// Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var date = require('date-and-time');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 9001;

// Route 
app.get('/time_now', function(req, res) {
    res.json({date: Date.now()});
});

app.get('/time_now_formated', function(req, res) {
    var now = new Date();
    res.json({date: date.format(now,'YYYY/MM/DD HH:mm:ss')});
});

// Server
app.listen(port);
console.log('listening on port 9001');
