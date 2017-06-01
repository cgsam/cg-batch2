'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/', function (req, res) {
    res.send('This is post a call');
});

app.put('/', function (req, res) {
    res.send('This is put a call');
});

app.delete('/', function (req, res) {
    res.send('This is delete a call');
});

app.listen(9000, function () {
    console.log('Sample App is listening on port 8080!')
})