let n1=Math.floor(Math.random()*10);
let n2=Math.floor(Math.random()*10);

document.getElementById("num1").innerHTML=n1;
document.getElementById("num2").innerHTML=n2;

console.log(n1,n2);

let correctans=n1+n2;
console.log(correctans);

function handlesubmit() {

    let value=parseInt(document.getElementById("ans").value);
    let answer=document.getElementById("ans").value
    if(answer ===''){
        document.getElementById("check").innerHTML ='please enter answer'
    }else{
        if(correctans==value){
            alert("correct answer");
        }else{
            alert("incorrect answer. correct anser is:"+ correctans);
        }
    
    }

  
   

    
    return false;
}