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
const init = async() => {
    try {
        let num = await diceRoll();
        console .log(num);
    } catch (error) {
        console.log(error);
    }
}
init();
// diceRoll().then((num) => {
//     console.log(num);
// }).catch((e) => {
//     console.log(e);
// })