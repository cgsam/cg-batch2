'use strict';

var fs = require('fs'),
    path = require('path'),
    morgan = require('morgan'),
    winston = require('winston'),
    logPath = '../../logs';

module.exports.initLogger = function(app){
    initMorgan(app);
    initWinston(app);
};

function initMorgan(app){
    // create a write stream (in append mode)
    var accessLogStream = fs.createWriteStream(path.join(__dirname || process.cwd(), logPath+'/access.log'), {flags: 'a'})
    // setup the logger
    app.use(morgan('combined', {stream: accessLogStream}))

}

function initWinston(app){

    global.$logger = new (winston.Logger)({
        transports: [
            new winston.transports.File({
                filename: 'logs/application.log',
                json: false,
                timestamp: function() {
                    return new Date().toLocaleString("en-US");
                },
                formatter: function(options) {
                    // Return string will be passed to logger.
                    return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (options.message ? options.message : '') +
                        (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
                }
            }),
            new winston.transports.Console({
                handleExceptions: true,
                json: false,
                timestamp: function() {
                    return new Date().toLocaleString("en-US");
                },
                formatter: function(options) {
                    // Return string will be passed to logger.
                    return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (options.message ? options.message : '') +
                        (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
                }
            })
        ],
        exceptionHandlers: [
            new winston.transports.File({ filename: 'logs/exceptions.log' })
        ]
    });

    $logger.transports.console.level = 'debug';
    $logger.transports.file.level = 'debug';
}
