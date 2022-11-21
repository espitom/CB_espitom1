console.log("Assignment and Activity: Class Based Object Blueprints")

/*
    Class-Based 
    Object Blueprint
*/
class convertWeight {
    constructor (name, kilograms){
        this.name = name;
        this.kilograms = kilograms;
        this.pounds = parseFloat(kilograms * 2.2).toFixed(2);
    }
}


/*
    Jelly's weight is 132 lbs 
    convert/calculate it to kilograms
*/
let dataWeightjelly = new convertWeight ("Jelly", 60);

console.log(`${variable.name}'s weight in lbs is ${variable.pounds}`);