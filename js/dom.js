const handlesubmit = () => {
    event.preventDefault();
    let divdisp = document.getElementById("disp");
    let name = document.getElementById("name").value;
    
    let id = Math.floor(Math.random()*100)
    let divele = document.createElement("div");
    divele.setAttribute("id","(disp-"+id+")")
    let divtext = document.createTextNode(name);

    let btnele = document.createElement("button");
    btnele.setAttribute("onclick","handleremove("+id+")")    
    let btntext = document.createTextNode("Delete");

    divdisp.appendChild(divele);
    divele.appendChild(divtext);
    btnele.appendChild(btntext);
    divele.appendChild(btnele);
   
}
 
const handleremove = (id) => {    
   
    let eleref = document.getElementById("(disp-" + id+ ")");
    
    eleref.remove() 

}
