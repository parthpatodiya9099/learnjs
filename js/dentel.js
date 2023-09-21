let seat1=1, cost1=500;
let seat2=2, cost2=1500;
let seat3=4, cost3=2500;
let seat4=6, cost4=12000;
let seat5=12, cost5=35000;
let  final_s;
let  final_c;
let treatment;
const DisplayData = (t,s,c) => {
    document.getElementById("tret").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;

    final_s=s; 
    final_c=c;

}
const hendleChange=()=>{
    let tret = document.getElementById("tretment").value;
    let res = 0;
    let ans = 0;

    if(tret === "tc"){
        treatment="Teeth Cleanings";
        res=seat1;
        ans=cost1;
    }else if(tret === "fi"){
        treatment="Fillings"
        res=seat2;
        ans=cost2;
    }else if(tret === "rct"){
        treatment="Root Canal Treatment"
        res=seat3;
        ans=cost3;
    }else if(tret === "rctc"){
        treatment="RCT+Cover"
        res=seat4;  
        ans=cost4;
    }else if(tret === "br"){
        treatment="Braces/Invisalign"
        res=seat5;
        ans=cost5;
    }
    DisplayData(treatment,res,ans)
    document.getElementById("disp").style.display = 'block';
}

const hendleBook = () => {

    let d = document.getElementById("AptDate").value;
    let dateAp=new Date(d)
    
    let fcost=final_c/final_s;
    
    let print = '';

    print += '<table border="2"><tr><th>Treatment</th><th>Seating-Date</th><th>Costing</th></tr>';

    for (let i=1; i<=final_s; i++) {
        if(i === 1){
            print += "<tr>"
            print += "<td rowspan="+final_s+">"+treatment+"</td>"
            print += "<td>"+ dateAp.toLocaleDateString() +"</td>"
            print += "<td>"+fcost+"</td>"
            print += "</tr>"
        }else{
            dateAp.setDate(dateAp.getDate() + 7);
            print += "<tr>"
            // print += "<td>"+" "+"</td>"
            print += "<td>"+ dateAp.toLocaleDateString() +"</td>"
            print += "<td>"+fcost+"</td>"
            print += "</tr>"
        }
       
    } 

    document.getElementById("tr-plan").innerHTML=print;
  
}