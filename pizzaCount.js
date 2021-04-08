let orderCount = 0;
const pizzaOrder = (topping,size) => {
    orderCount++;
    console.log(`${orderCount}`);
    console.log(`take order with ${topping} and ${size} pizza`);
    
}
pizzaOrder('onion','big');
