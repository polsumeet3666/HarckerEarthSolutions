//https://www.hackerearth.com/practice/algorithms/searching/linear-search/practice-problems/algorithm/wet-clothes-625348cf
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    //process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
    input =  input.split("\n");
    let line1 = input[0].split(" ").map((item)=>Number(item));
    let line2 = input[1].split(" ").map((item)=>Number(item));
    let line3 = input[2].split(" ").map((item)=>Number(item));
    //console.log(line1,line2,line3)
    findMaxCothCollected(line1[2],line2,line3);
}

function findMaxCothCollected(chance,rain,cloth){
    
    let diff = [];
    for(let i=1;i<rain.length;i++){
        diff.push(rain[i]-rain[i-1]);
    }
    diff = diff.sort((a,b)=>b-a)
    let m = diff[0];
    let result = 0;
    for(let i =0;i<cloth.length;i++){
        if (cloth[i]<=m){
            result++
        }
    }
    //console.log(diff);
    console.log(result);
}
