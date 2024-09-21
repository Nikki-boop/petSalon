
let pets=[];//empty array

function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
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
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value, inputService.value);
    //create an obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    console.log("newPet",newPet);
    if(isValid(newPet)==true){
        pets.push(newPet)//push the newpet to the array
        //display on the console the new pet  
        console.log(newPet);
        displayRows();
     }else{
        alert("Fill in this form");
     }
}


function displayRows(){
    const TABLE = document.getElementById("petRows");
    let tr="";
    for(let i=0; i<pets.length; i++){
        let pet = pets[i];
        tr+= `
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td><button onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    }
TABLE.innerHTML= tr;
document.getElementById("totalPets").innerHTML=pets.length;

}

function deletePet(petID){
    console.log("Deleting the pet");
    document.getElementById(petID).remove();
    pets.splice(petID,1);//removes pet from the array
    displayRows();
}

function search(){
    displayRows();
    let ss=document.getElementById("txtSearch").value;
    let foundPet=null;
    let id;

    for(let i=0;i<pets.length;i++){
        if(pets[i].name.toLowerCase() == ss.toLowerCase()){
            foundPet=pets[i];
            id=i;
            break;
        }
    }

    if(foundPet){
        document.getElementById(id).classList.add("highlight");
    }else{
        displayRows();
    }
}

function getServices(){
    
    //get the list of services on the LS
    let services = read();
    let option;
    //travel the array (for)
    for(let i=0; i<services.length; i++){
        let service = services[i];
        //HTML for <option>
        option=`<option value="${service.description}">${service.description}</option>`;
    }
    $("#txtService").append(option);

}

function init(){
    console.log("Init fn");
    let jack = new Pet ("Jack", 4, "Male", "Bernedoodle", "grooming");
    let ben = new Pet ("Ben", 2, "Male", "Bernese Mtn Dog", "grooming");
    pets.push(jack, ben);

    displayRows();
    getServices();
}
window.onload=init;




