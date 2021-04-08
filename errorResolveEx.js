const diceRoll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.ceil(Math.random()*6);
            if (num == 1) {
                reject('You rolled a 1, you lose');
            } else {
                resolve(num);
            }
        }, 1000);
    });
}
diceRoll().then((num) => {
    console.log(num);
}).catch((e) => {
    console.log(e);
})