## learnyounode notes

process.argv[]
coerce string into number: `+<number>`, `Number(<number>)`
fs module - filesystem
Buffer::toString()
String::split()
    
    console.log(require('fs').readFileSync(process.argv[2]).toString().split("\n").length-1);

    $ cat io.js | wc -l
    30
    $ node io.js io.js 
    30

    
idiomatic Node.js callbacks normally have the signature:

    function callback (err, data) { /* ... */ }

you can check if an error occurred by checking whether the first argument is **truthy**. If there is no error, you should have your Buffer object as the second argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer.


