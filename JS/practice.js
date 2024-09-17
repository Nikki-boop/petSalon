//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//remember to add the jquery on the html
function register(){
    let inputDescription=$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

    let newService = new Service(inputDescription, inputPrice);
    save(newService);
    console.log(newService);
    $("input").val(""); //clear the input
}

function init(){

}

window.onload=init;