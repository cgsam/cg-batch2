'use strict';

var express = require('express'),
    logger = require('./logger');


module.exports.start = function(msg){
    var app = this.init();
        logger.initLogger(app);

    app.get('/', function (req, res) {
        res.send('hello, world!')
    });

    var port = 9000;
    app.listen(port, function(){
       $logger.info("Listening on port :: "+port);
    });
};

module.exports.init = function (){
    var app = express ();
    return app;
};
