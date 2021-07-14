function permut(string) {
  let [word, digits] = string.match(/\D+|\d+/g);
  // console.log(digits);
  // console.log(word);
  if(digits){
  if (digits.length == 0) return digits; 
    let permutations = []; 
    for (let i = 0; i < digits.length; i++) {
      let num = digits[i];
      // console.log(num);
  let remainingNum = digits.slice(0, i) + digits.slice(i + 1); 
  console.log(remainingNum);
  for (let j = 0; j < remainingNum.length; j++) {
       permutations.push(num + permut(remainingNum)[j]);
    }
  }
    return permutations;
  } else {
    return string;
}

}
 console.log(permut('ab123c'));