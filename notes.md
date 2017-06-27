
## learnyounode notes

   » To print these instructions again, run: learnyounode print                  
   » To execute your program in a test environment, run: learnyounode run program.js
   » To verify your program, run: learnyounode verify program.js                
   » For help run: learnyounode help

### baby steps

coerce string into number: `+<number>`, `Number(<number>)`
process.argv[]

### my first i/o

fs module - filesystem

Buffer::toString()
String::split()
    
    console.log(require('fs').readFileSync(process.argv[2]).toString().split("\n").length-1);

    $ cat io.js | wc -l
    30
    $ node io.js io.js 
    30

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


idiomatic Node.js callbacks normally have the signature:

    function callback (err, data) { /* ... */ }

you can check if an error occurred by checking whether the first argument is **truthy**. If there is no error, you should have your Buffer object as the second argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer.


