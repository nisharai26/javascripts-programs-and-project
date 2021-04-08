let space1 = prompt("ENTER YOUR VALUE");
let space2 = prompt("ENTER YOUR VALUE");
let space3 = prompt("ENTER YOUR VALUE");
let space4 = prompt("ENTER YOUR VALUE");
let space5 = prompt("ENTER YOUR VALUE");
let space6 = prompt("ENTER YOUR VALUE");
let space7 = prompt("ENTER YOUR VALUE");
let space8 = prompt("ENTER YOUR VALUE");
let space9 = prompt("ENTER YOUR VALUE");
alert(`${space1} | ${space2} | ${space3}
'---------------'
${space4} | ${space5} | ${space6}
'---------------' 
${space7} | ${space8} | ${space9}`);
function winnerCheck(s1,s2,s3){
  if(s1 ==""){
      return false;
  }
  return s1 == s2 && s2 == s3;
}

function winner() {
  if (winnerCheck(space1,space2,space3)){
    alert(`${space1} wins`);
  } else if (winnerCheck(space4,space5,space6)) {
    alert(`${space4} wins`);
  } else if (winnerCheck(space7,space8,space7)) {
    alert(`${space7} wins`);
  }  else if (winnerCheck(space1,space4,space7)) {
    alert(`${space1} wins`);
  } else if (winnerCheck(space2,space5,space8)) {
    alert(`${space2} wins`);
  }else if (winnerCheck(space3,space6,space9)) {
    alert(`${space3} wins`);
  }else if (winnerCheck(space1,space5,space9)) {
    alert(`${space1} wins`);
  }else if (winnerCheck(space3,space5,space7)) {
    alert(`${space3} wins`);
  }else {
    alert("Draw");
  }
}
winner();
