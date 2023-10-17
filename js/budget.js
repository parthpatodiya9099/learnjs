let update = null;
class Budget {
    budget;
    expence;
    expamount;    
    constructor() {
        this.budget = document.getElementById("budget");
        this.expence = document.getElementById("expence");
        this.expamount =document.getElementById("expamount");
    }    
    handlesubmit() {
        event.preventDefault();
        let bgt = parseInt(this.budget.value)       
        if ( bgt< 0) {
            event.preventDefault()
            document.getElementById("error1").innerHTML = "Please Enter Valid Value";
        }else if(bgt == '' || isNaN(bgt)){
            event.preventDefault()
            document.getElementById("error1").innerHTML = "Please Enter  Value";
        }else{
            document.getElementById("error1").innerHTML = " ";
            document.getElementById("ff1").innerHTML='$'+this.budget.value;
            this.handledata();        
        }                 
    }
    handledata(){
        let bgt = parseInt(this.budget.value);
        let exp = 0;
        let balance = bgt - exp;
        document.getElementById("ff3").innerHTML='$'+balance;
    }

    handleexpnse(){ 
            let bgt = parseInt(this.budget.value) 
            let exp = parseInt(this.expamount.value)
            let id = Math.floor(Math.random()*1000);       
            if (exp == '') {
                event.preventDefault();
                document.getElementById("error3").innerHTML = "Please Enter Expence Amount";                
            }else if(this.expence.value == ''){
                event.preventDefault();
                document.getElementById("error2").innerHTML = "Please Enter Valid Expence";
            }else{
                if(update == null){
                    document.getElementById("error3").innerHTML = " ";
                    document.getElementById("error2").innerHTML = " ";
                    let obj={
                        "id":id,
                        "balance":bgt,
                        "name":this.expence.value ,
                        "cost":exp,
                    }
                    let localdata = JSON.parse(localStorage.getItem("budget"));
                    if(localdata == null){
                        localStorage.setItem("budget",JSON.stringify([obj]));
                    }else{
                        localdata.push(obj);
                        localStorage.setItem("budget",JSON.stringify(localdata));
                    }
                }else{
                    let obj={
                        "id":id,
                        "balance":bgt,
                        "name":this.expence.value,
                        "cost":exp,
                    }
                    let localdata = JSON.parse(localStorage.getItem("budget"))
                    let index = localdata.findIndex((v)=>v.id == update);               
                    localdata[index]=obj;
                    localStorage.setItem("budget", JSON.stringify(localdata));   
                    window.location.reload()
                }              
                update=null;    
                this.displaydata();
                window.location.reload();
            }           
    }
    displaydata(){
        let localdata = JSON.parse(localStorage.getItem("budget"));
        let exp = localdata.reduce((acc, v) =>acc + v.cost,0);
        let balance;
        let displayref = document.getElementById("disp1");
        let displayref2 = document.getElementById("disp2");
        let displayref3 = document.getElementById("disp3");

        localdata.map((v)=>{
            
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td1t = document.createTextNode("-"+v.cost);

            td1.appendChild(td1t);
            tr.appendChild(td1);
            displayref.appendChild(tr);
            let tr1 = document.createElement("tr");
            let td2 = document.createElement("td");
            let td2t = document.createTextNode(v.name);

            td2.appendChild(td2t);
            tr1.appendChild(td2);

            let btntr = document.createElement("tr");
            let td3 = document.createElement("button");            
            let td3t = document.createTextNode("X");
            td3.addEventListener('click',()=>this.handleremove(v.id));
            td3.setAttribute('id','deletebtn');
            td3.appendChild(td3t);
            btntr.appendChild(td3);    

            let td4 = document.createElement("button");
            let td4t = document.createTextNode("E");
            td4.addEventListener('click',()=>this.handleedit(v.id));
            td4.setAttribute('id','editbtn');
            td4.appendChild(td4t);
            btntr.appendChild(td4);
            displayref3.appendChild(btntr);

            displayref2.appendChild(tr1);

        balance = v.balance-exp;
        document.getElementById("ff1").innerHTML='$'+v.balance;
        window.onload=document.getElementById("budget").value=v.balance;
        })
        document.getElementById("ff2").innerHTML='$'+exp;
        document.getElementById("ff3").innerHTML='$'+balance;
       
    }
      
 }
class crud extends Budget{
    DisplayAll(){
        this.displaydata()
        // window.document.body.style.cursor = "wait";  
    }  
    handleremove(id){
        let localdata = JSON.parse(localStorage.getItem('budget'));
    
        let fdata= localdata.filter((v)=>v.id !== id)
        localStorage.setItem("budget", JSON.stringify(fdata));
        window.location.reload()
          
    }
    handleedit(id){
        let localdata = JSON.parse(localStorage.getItem('budget'));    
        let index = localdata.findIndex((v)=>v.id==id);
    
        document.getElementById("expence").value = localdata[index].name;
        document.getElementById("expamount").value = localdata[index].cost;
       
        
        update= localdata[index].id;
    }   
}

let b = new Budget();

let budgetref = document.getElementById("budgetform");
budgetref.addEventListener("submit",function(){
    b.handlesubmit()
});

let expformref = document.getElementById("expform");
expformref.addEventListener("submit",function(){
    b.handleexpnse();
});

let c = new crud();
c.DisplayAll();



