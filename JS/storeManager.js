function save(service){
    let serviceList=read();//getting list or []
    serviceList.push(service);
    let val = JSON.stringify(serviceList);
    console.log(val);
    localStorage.setItem("service", val);//sending to LS
}

function read(){
    let data = localStorage.getItem("service");
    if(!data){//NOT data?
        return[]; //empty array
    }else{
        let list = JSON.parse(data);//converts string into array op of stringify
        return list;
    }

}

