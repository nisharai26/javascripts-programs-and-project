class Bug {
    constructor(name,numLegs){
        this.name =  name;
        this.numLegs = numLegs;
    }
}

class Spider extends Bug {
    constructor(name,numLegs = 8,poisonus = false){
        super(name,numLegs);
        this.poisonus = false;
    }
}

class Mosquito extends Bug {
    constructor(name,numLegs = 4, full = true){
    super(name,numLegs);
    this.full = full;
    }
}

class SuperMosquitto extends Mosquito {
    constructor(name){
        super(name);
        this.full = false;
        this.isSpecial = true;
    }
    yell (){
        console.log("buzzzzzz")
    }
}
const bugs = [
    new Bug("billy",52),
    new Spider("zilly"),
    new Mosquito("philly",4),
    new SuperMosquitto("lilly"),
    new Spider("silly",8,true)
];
console.log(bugs);
const DangerousBugs =  bugs.filter(bug=>{
    return (
        bug.poisonus === true ||
        bug.numLegs > 4
        );
})
console.log('--------------------------------------------')
console.log(DangerousBugs);