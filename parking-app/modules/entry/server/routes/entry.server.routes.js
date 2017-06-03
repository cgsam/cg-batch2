'use strict';


module.exports = function(app){

    $logger.info("Loading Entry Server routes");

    app.routes('/api/entry')
        .get(function(req,res){
            res.send("Response from Entry module for get call.");
        });

    $logger.info("Loaded Entry Server routes");
};
