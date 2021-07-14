const evens = [2,6,9,5,13,1.8,2.3].filter(x=>{
    return x % 2 === 0;
});
const odds = [2,6,9,5,13,1.8,2.3].filter(x=>{
    return x % 2 !== 0;
});
console.log(`evens ${evens}`);
console.log(`odds ${odds}`)