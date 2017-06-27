// filter2.js

if (process.argv.length != 4) { console.log("Incorrect number of args"); process.exit(0) } 

var fs       = require('fs');
var path     = require('path');
var filepath = process.argv[2]; 
var filter   = process.argv[3]; //console.log("process.argv[3]: "+process.argv[3]);

fs.readdir(filepath, function(err, list) { // async
    list.forEach(function(file) {
        if (path.extname(file) == "."+filter) {
            console.log(file);
            
        }
    });
}); 

//     if (err) { 
//         console.log(err); process.exit(0); 
//     }
        //console.log("File "+i+": "+list[i]);
        //console.log("extn: "+extn);
    //console.log("length: "+list.length.toString());
    //for (i=0; i<list.length; i++) {
        //console.log("filt: "+filt);
// function callback (err, data) {
// 	if (err) { console.log("there was an error"); exit(1); }
// 	var lines = data.split('\n').length - 1;
// 	console.log(lines)
// }

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