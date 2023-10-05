let arr = [];
let update = null;

const handlesubmit=()=> {
    event.preventDefault();

    let todo = document.getElementById("todo").value;
    
    if(update !== null){
        arr[update] = todo;       
    }else{
        arr.push(todo);
    }
    update=null;
    document.getElementById("todo").value='';
    display();
   
}

const handleclick = (i) => {
    arr.splice(i,1);    

    display();
}

const handleedit = (i) => {
    update=i;
    document.getElementById("todo").value=arr[i]
}

const display =()=> {
    let print = ' ';
    arr.map((v,i) => {
        print += `<li>${v}`
        print += `<button onclick = handleclick(${i})><i class="fa-solid fa-trash"></i></button>`  
        print += `<button onclick = handleedit(${i})><i class="fa-solid fa-pen-to-square"></i></button>`              
        print +=`</li>`
    });   

document.getElementById("disp").innerHTML=print;
}