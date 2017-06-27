/* 
 function callback (err, data) {  ...  }
 */


function callback (err, data) {
	if (err) { 
        console.log("there was an error"); process.exit(1); 
    }
	var lines = data.split('\n').length - 1;
	console.log(lines)
}

require('fs').readFile(process.argv[2], "utf8", callback); // adding 'utf8' arg ensures String returned, so .toString() not necessary


/* cruft
if (process.argv.length != 3) { console.log("Incorrect number of args"); process.exit(0) } 
//var file = buffer.toString();
	//console.log(lines)
	//console.log("num lines:" + lines.length)

*/
/* official

    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/