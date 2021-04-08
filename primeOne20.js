var isPrime;

    for(var i=2;i < 21;i++){
        isPrime =1;
        for(let j = 2;j< i/2;j++){
            if(i % j == 0){
                isPrime = 0;
                break;
            }
        }
     if(isPrime == 1){
       console.log("prime no.",i);
    }
    }