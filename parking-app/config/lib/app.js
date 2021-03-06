'use strict';

var express = require('express'),
    logger = require('./logger');


module.exports.start = function(msg){
    var app = this.init();
        logger.initLogger(app);
        this.initApplicationRoutes(app);

    app.get('/', function (req, res) {
        $logger.debug("Entering function get call");
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

module.exports.initApplicationRoutes = function(app){

    require('./../../modules/entry/server/routes/entry.server.routes')(app);
};
