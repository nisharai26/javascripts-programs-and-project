var num = "1234";
var len = num.length;
for(let i=0;i =(len)/2;i++){
    if(num[i] == num[len-1-i]){
        console.log("palindrom");
        break;
    } else {
        console.log("Not palindrom");
        break;
    }
}