//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}
function isValidService(Service){
    let validDescription=true;
    let validPrice=true;

    if(Service.description==""){
        validDescription=false;
        $(".descriptionValidationMsg").css("color", "red").show();
    }else{
        $(".descriptionValidationMsg").hide();
    }

    if(Service.price==""){
        validPrice=false;

    }
    return validDescription;
}
//remember to add the jquery on the html
function register(){
    let inputDescription=$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    // create the new objet
    let newService = new Service(inputDescription, inputPrice);
    if(isValidService(newService)==true){
        save(newService); //this fn is under storeManager
        $("input").val(""); //clear the input
    }  
}

function init(){
    $(".descriptionValidationMsg").hide();
}


window.onload=init;