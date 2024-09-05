console.log("Register");

let pets=[];//empty array

// object literal
let pet1 = {
    name:"Jack",
    age:4,
    gender: "male",
    breed:"bernedoodle"
}

let pet2 = {
    name:"Ben",
    age:2,
    gender: "male",
    breed: "Bernese Mountain Dog"
}

// push pets into the array
pets.push(pet1,pet2);

function displayNames(){
    console.log("Total pets = " + pets.length);
    console.log(pets[0].name);
    console.log(pets[1].name);
}

displayNames();

