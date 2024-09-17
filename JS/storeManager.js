function save(services){
    let val = JSON.stringify(services);
    localStorage.setItem("services", val);//sending to LS
}