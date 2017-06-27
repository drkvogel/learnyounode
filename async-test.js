var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, contents) {
    if (err) {
        console.log(err);
        return;
    }
    var lines = contents.split('\n');
    console.log(lines.length-1);
});
