// filter.js

var fs      = require('fs');
var path    = require('path');
if (process.argv.length != 4) { console.log("Incorrect number of args"); process.exit(0) } 
var path = process.argv[2]; 
var filt = process.argv[3];


// function callback (err, data) {
// 	if (err) { console.log("there was an error"); exit(1); }
// 	var lines = data.split('\n').length - 1;
// 	console.log(lines)
// }

fs.readdir(path, function(err, list) { // async
    var path    = require('path');
    if (err) { 
        //console.log();
        console.log(err); process.exit(0); 
    }
    //console.log("length: "+list.length.toString());
    for (i=0; i<list.length; i++) {
        //console.log("File "+i+": "+list[i]);
        var extn = path.extname(list[i]);
        //console.log("extn: "+extn);
        //console.log("filt: "+filt);
        if (extn == "."+filt) {
            console.log(list[i]);
        }
    }
}); 

/* ok, but

could have used 

    list.forEach(function (file) {
        ...  
    })

instead of for loop, and no need to store path and filt.

// reply kirsty
// reply laura
// reply liz

// adding 'utf8' arg ensures String returned, so .toString() not necessary

/* official

    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/