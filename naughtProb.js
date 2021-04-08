let space1= "x";
let space2= "x";
let space3= "o";
let space4= "o";
let space5= "o";
let space6= "x";
let space7= "x";
let space8= "o";
let space9 ="x";


console.log(`${space1} | ${space2} | ${space3}`);
console.log('--------');

console.log(`${space4} | ${space5} | ${space6}`);

console.log('--------');

console.log(`${space7} | ${space8} | ${space9}`);
function winnerCheck(s1,s2,s3){
    if(s1 ==""){
        return false;
    }
    return s1 == s2 && s2 == s3;
}
function winner() {
    if (winnerCheck(space1,space2,space3)) {
        console.log(`${space1} wins`);
    } else if (winnerCheck(space4,space5,space6 )){
       console.log(`${space4} wins`)
    } else if (winnerCheck(space7,space8,space9)){
      console.log(`${space7} wins`);
    } else if(winnerCheck(space1,space4,space7)) {
      console.log(`${space1} wins`);
    } else if (winnerCheck(space2,space5,space8)) {
      console.log(`${space2} wins`);
    } else if (winnerCheck(space3,space6,space9)) {
      console.log(`${space3} wins`);
    } else if (winnerCheck(space1,space5,space9)) {
      console.log(`${space1} wins`);
    } else if(winnerCheck (space3,space5,space7)) {
      console.log(`${space3} wins`);
    }
     else {
      console.log("Draw");
    }
  }
  winner();
  //console.log(winnerCheck(space1,space5,space9));
  