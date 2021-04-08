for(let num = 0;num <15; num++){

if (num % 3 == 0 && !(num % 5 == 0)){
    console.log("fizz");

}
else if(num % 5 == 0 && !(num % 5 == 0)){
    console.log("buzz");
}
else if(num % 3 == 0 && num % 5 == 0){
    console.log("divisble by both");
}
else {
    console.log(`${num}`);
}
}