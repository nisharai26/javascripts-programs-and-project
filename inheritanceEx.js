class Animal{
    constructor (name){
        this._name=name;
        this._hunger =100;
        this._thirst = 100;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    eat(){
        return this.hunger--;
    }
    drink(){
        return this.thirst--;
    }

}
class Bunny extends Animal {
    constructor(name,lovesCarrot){
        super(name);
        this._lovesCarrot = lovesCarrot;
    }
    get lovesCarrot(){
        return this._lovesCarrot;
    }

}
 const rosie = new Bunny("Rossie",true);
//  console.log(rosie);
console.table(rosie);