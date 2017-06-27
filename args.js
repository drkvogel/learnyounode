// 2: baby steps

//console.log(process.argv);
//console.log(process.argv.length);
var sum = 0
for (var i=2; i<process.argv.length; i++) {
	//console.log(Number(process.argv[i]));
	//sum += Number(process.argv[i]);
	sum += +process.argv[i]
}

//console.log(Number(sum));
console.log(sum);

/* official solution:
    var result = 0

    for (var i = 2; i < process.argv.length; i++)
      result += Number(process.argv[i])

    console.log(result)
  */