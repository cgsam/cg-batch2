'use strict';

var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    morgan = require('morgan');


module.exports.start = function(msg){
    var app = this.init();
        this.initLogger(app);

    app.get('/', function (req, res) {
        res.send('hello, world!')
    });

    var port = 9000;
    app.listen(port, function(){
        console.log("Listening on port :: "+port);
    });
};

module.exports.init = function (){
    var app = express ();
    return app;
};

module.exports.initLogger = function(app){
    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream(path.join(__dirname || process.cwd(), '../../logs/access.log'), {flags: 'a'})

// setup the logger
    app.use(morgan('combined', {stream: accessLogStream}))
};
