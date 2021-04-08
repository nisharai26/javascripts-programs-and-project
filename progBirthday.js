const birthDay = new Date();
const today  = new Date();
birthDay.setFullYear(2021, 12, 26);

const diff = Math.floor(((((birthDay - today)/1000)/60)/60)/24);

console.log(diff);