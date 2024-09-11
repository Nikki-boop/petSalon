
let pets=[];//empty array

function Pet(name,age,gender,breed){
    //property=paramenter
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
//get the inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(pet){
    let validation = true;
    if(pet.name==""){
        validation=false;
    }
    return validation;
}

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    //create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    if(isValid(newPet)==true){
        pets.push(newPet)//push the newpet to the array
        //display on the console the new pet  
        console.log(newPet);
        displayCards();
     }else{
        alert("Fill in this form");
     }
}

function init(){
    console.log("Init fn");
    let jack = new Pet("Jack",4,"Male","Bernedoodle");
    let ben = new Pet("Ben",2,"Male","Bernese Mountain Dog");
    pets.push(jack,ben);

}




window.onload=init;

