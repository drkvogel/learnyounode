var fs = require('fs');
var path = require('path');
var ext = process.argv[3];

fs.readdir(process.argv[2], function(err, data) {
    if (err) {
        return console.log(err);
    }
    for (var i=0; i<data.length; i++) {
        // console.log(data[i]);
        // console.log(path.extname(data[i]));

        if (path.extname(data[i]) == '.'+ext) {
            console.log(data[i]);
            // console.log(data.split('.').length());
            //
        }
    }

});
