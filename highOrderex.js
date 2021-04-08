const sayHello = ()=> {
    
        console.log("Hello");
    
}
const highOrder = (fn) =>{
    for(let i=0;i<5;i++){
       fn();
    }

}
highOrder(sayHello);