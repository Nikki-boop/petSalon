console.log("Register");

let pets=[];//empty array

// object literal
let pet1 = {
    name:"Jack",
    age:4,
    gender: "male",
    breed:"bernedoodle",
    service: ""
}

let pet2 = {
    name:"Ben",
    age:2,
    gender: "male",
    breed: "Bernese Mountain Dog",
    service: ""
}
let pet3 = {
    name:"Orange",
    age:0,
    gender: "female",
    breed: "cat",
    service: ""
}

// push pets into the array
pets.push(pet1,pet2,pet3);

function displayNames(){
    console.log("Total pets = " + pets.length);
    document.getElementById("total").innerHTML = "Total registered pets = " + pets.length
    

    console.log(pets[0].name + ",", pets[0].age+ ",", pets[0].gender+ ",", pets[0].breed+ ",",pets[0].service + "service:" );

    console.log(pets[1].name+ ",", pets[1].age+ ",", pets[1].gender+ ",", pets[1].breed+ ",",pets[1].service + "service:" );

    console.log(pets[2].name+ ",", pets[2].age+ ",", pets[2].gender+ ",", pets[2].breed+ ",",pets[2].service + "service:" );
}
displayNames();




function forloopnames(){
    for (let i=0; i<pets.name.length; i++);
    console.log("The pets name is " + )
}

forloopnames();









