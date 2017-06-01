'use strict';

var arr = [2,5,7,8,9];

function oddSync(arrayWithEvenAndOdds){
    
    var arrayWithEvensonly = arrayWithEvenAndOdds.filter(function (val) {
        return val % 2 == 0;
    });

    return arrayWithEvensonly;
}

//var evenArray = odd(arr);
//
//console.log("Result :: " + JSON.stringify({a:10, b:20}));



function odd(array, callback){

    if(!array.length){
        return callback && callback(new Error("Incoming array is empty"))
    }

    setTimeout(function(){

        var result  = array.filter(function(val){
           return val % 2 == 0;
        });

        console.log("Result is available now and invoking callback function");
        callback(null, result);

    },5000); // 1000ms => 1 second

    console.log("CPU is not waiting for setTimeout to complete");

};

odd([2,5,7,8,9], function(err, result){
    if(err){
        console.log("Error occured :: "+err);
        return;
    }
    console.log(result);
});
