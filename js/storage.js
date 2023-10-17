// const handlesubmit = ()=>{  
    
//     let name = document.getElementById('name').value;
//     let localdata=JSON.parse(localStorage.getItem("sdata"));

//    if(localdata === null){
//     localStorage.setItem("sdata",JSON.stringify([name]));
//    }else{        
//         localdata.push(name);
//         localStorage.setItem("sdata",JSON.stringify(localdata));
//    }   

//     display();
// }
// const display= () => {

//     let localdata=JSON.parse(localStorage.getItem("sdata"));
    
//     let divref = document.getElementById("disp");
//     divref.innerHTML='';
//     localdata.map((v)=>{
//         let lelem = document.createElement("li");
//         let ltext = document.createTextNode(v);

//         lelem.appendChild(ltext);
//         divref.appendChild(lelem);
//     });
// }
// display();


 // let tr = document.createElement("tr");
    // let th1 = document.createElement("th");
    // let tht1 = document.createTextNode("Date")

    // tableref.appendChild(tr);
    // tr.appendChild(th1);
    // th1.appendChild(tht1)

    // let th2 = document.createElement("th");
    // let tht2 = document.createTextNode("Table No.");
    // tr.appendChild(th2);
    // th2.appendChild(tht2)

    // let th3 = document.createElement("th");
    // let tht3 = document.createTextNode("Food");
    // tr.appendChild(th3);
    // th3.appendChild(tht3)

    // let th4 = document.createElement("th");
    // let tht4 = document.createTextNode("Parson");
    // tr.appendChild(th4);
    // th4.appendChild(tht4)

    // let th5 = document.createElement("th");
    // let tht5 = document.createTextNode("Total Bill")
    // tr.appendChild(th5);
    // th5.appendChild(tht5)