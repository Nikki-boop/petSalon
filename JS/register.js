function displayRows(){
    let petName = document.getElementById("txtName").value;
    let petAge = document.getElementById("txtAge").value;
    let petGender = document.getElementById("txtGender").value;
    let petBreed = document.getElementById("txtBreed").value;
    let petService = document.getElementById("txtService").value;
    let table = document.getElementById("petRows");
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    c1.innerText = petName;
    c2.innerText = petAge;
    c3.innerText = petGender;
    c4.innerText = petBreed;
    c5.innerText = petService;
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    table.appendChild(row);
}