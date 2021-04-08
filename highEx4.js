const map =(arr,fn)=>{
    let newArr = [];
    for(const item of arr){
        let result = fn(item);
        newArr.push(result);
    }
    return newArr;

}
let myArr = [1,2,3,4,5];
let finalArr = map(myArr,x=>{
    return x * 3;

});
console.log(finalArr);