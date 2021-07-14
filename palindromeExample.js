function palindrome(str) {
    console.log(str.split('').join(''));
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
   console.log(reverseStr === lowRegStr);
} 
  palindrome("nak");