let arr = [];
const handlesubmit = ()=>{
    event.preventDefault();
    let name = document.getElementById('name').value;

    arr.push(name);
    

    localStorage.setItem("sdata",JSON.stringify(arr));
    display();
}
const display= () => {

    let localdata=JSON.parse(localStorage.getItem("sdata"));
    
    divref = document.getElementById("disp");

    localdata.map((v)=>{
        let lelem = document.createElement("li");
        let ltext = document.createTextNode(v);

        lelem.appendChild(ltext);
        divref.appendChild(lelem);
    });
}
display();