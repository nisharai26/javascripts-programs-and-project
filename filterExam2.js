function intersect(array1,array2){
//     const result = array1.filter(value => array2.includes(value));
//    console.log ([...new Set(result)]);
    
let myArray = new Set(array1);
console.log(myArray);
console.log([...new Set(array2)]);
console.log([...new Set(array2)].filter(value=>myArray.has(value)));

}

intersect([1,2,1,1,3],[1,2,])
intersect([1,1,1,4,56,7],[56]);