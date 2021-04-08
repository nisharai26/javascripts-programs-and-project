const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divison = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2,add)=>{
        return add(num1,num2);

    }
}
console.log(doMaths(4)(3, add));