//1071
//Sum of Consecutive Odd Numbers I
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********


function main() {


  let d = [];
  let total = 0;
  var X = readline();
  var Y = readline();
  for(X; X<=Y;++X){
    if(X%2===1||X%2===-1){
        d.push(X);
    }
  }
  d.forEach(function(item){
    total+=item;
  });
  print(total);
}


