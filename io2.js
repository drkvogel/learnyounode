// io.js in one line
console.log(require('fs').readFileSync(process.argv[2]).toString().split("\n").length-1);

/*  
//console.log(fs.readFileSync(process.argv[2]).toString().split("\n").length-1);
var fs = require('fs')

var buffer = fs.readFileSync(process.argv[2])
var file = buffer.toString();
var lines = file.split('\n')
//console.log(lines)

//console.log("num lines:" + lines.length)
var num = lines.length;
num -= 1
console.log(num)


if (process.argv.length != 3) {
	console.log("Incorrect number of args")
	process.exit(0)
} else {
	//console.log("Got arg: "+process.argv[2]);
}


var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
*/