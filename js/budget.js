let update = null;
class Budget {    
    constructor() {
        this.budget = document.getElementById("budget");
        this.expence = document.getElementById("expence");
        this.expamount =document.getElementById("expamount");
    }    
    handlesubmit() {
        event.preventDefault();
        let bgt = parseInt(this.budget.value)       
        if ( bgt < 0) {
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
        // window.location.reload();                
    }
    handledata(){
        let bgt = parseInt(this.budget.value);
        let exp = 0;
        let balance=0;
        if(balance){
            balance=0;           
        }else{
            balance = bgt - exp;
        }
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
                        "name":this.expence.value,
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
        let localdata=JSON.parse(localStorage.getItem("budget"))
        
        let exp = localdata.reduce((acc, v) =>acc + v.cost,0);
        let balance=0;
        let displayref = document.getElementById("disp1");
        let displayref2 = document.getElementById("disp2");
        let displayref3 = document.getElementById("disp3");        
       
        let btnref = document.getElementById("btn");

      
        let btnA = document.createElement("button");
        btnA.setAttribute("id","buttton")
        btnA.addEventListener('click',()=>this.handleacc())
        let btnTA =  document.createTextNode("A");
        btnA.appendChild(btnTA);
        btnref.appendChild(btnA);

        let btnD = document.createElement("button");
        btnD.setAttribute("id","buttton")
        btnD.addEventListener('click',()=>this.handledes())
        let btnTD =  document.createTextNode(" D ");
        btnD.appendChild(btnTD);
        btnref.appendChild(btnD);

        let btnref2 = document.getElementById("btn2");

        let btna = document.createElement("button");
        btna.setAttribute("id","buttton")
        btna.addEventListener('click',()=>this.accending())
        let btnTa =  document.createTextNode("A");
        btna.appendChild(btnTa);
        btnref2.appendChild(btna);       

        let btnd = document.createElement("button");
        btnd.setAttribute("id","buttton")
        btnd.addEventListener('click',()=>this.Descending())
        let btnTd =  document.createTextNode("D");
        btnd.appendChild(btnTd);
        btnref2.appendChild(btnd);

        let searchref = document.getElementById("search");
        
        searchref.addEventListener("keyup",()=>this.searchfunction());


        localdata.map((v)=>{
            
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.setAttribute("id","acc1")
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
    constructor(){
        super();
        this.search = document.getElementById("search");
    }
    DisplayAll(){
        this.displaydata()
    }  
    handleremove(id){
        let localdata = JSON.parse(localStorage.getItem('budget'));

        let fdata= localdata.filter((v)=>v.id !== id)
        localStorage.setItem("budget", JSON.stringify(fdata));
        window.location.reload();
          
    }
    handleedit(id){
        let localdata = JSON.parse(localStorage.getItem('budget'));    
        let index = localdata.findIndex((v)=>v.id==id);
    
        document.getElementById("expence").value = localdata[index].name;
        document.getElementById("expamount").value = localdata[index].cost;
       
        
        update= localdata[index].id;
    }
    handleacc(){
        let localdata = JSON.parse(localStorage.getItem("budget"));
        let sdtaa=localdata.sort((a,b)=>a.cost-b.cost);
        localStorage.setItem("budget",JSON.stringify(sdtaa));
        window.location.reload()
    
        document.getElementById("acc1").innerHTML=sdtaa
    }
    handledes(){
        let localdata = JSON.parse(localStorage.getItem("budget"));
        let sdtaa=localdata.sort((a,b)=>b.cost-a.cost);
        localStorage.setItem("budget",JSON.stringify(sdtaa));
        window.location.reload()
    
        document.getElementById("acc1").innerHTML=sdtaa
    }
    accending(){
        let localdata = JSON.parse(localStorage.getItem("budget"));
        let data = localdata.sort((a,b)=>a.name < b.name ?-1:1);
        
        localStorage.setItem("budget",JSON.stringify(data));
        window.location.reload()
    
        document.getElementById("acc1").innerHTML=data;
    }
    Descending(){
        let localdata = JSON.parse(localStorage.getItem("budget"));
        let data = localdata.sort((a,b)=>a.name > b.name ?-1:1);
        
        localStorage.setItem("budget",JSON.stringify(data));
        window.location.reload()
    
        document.getElementById("acc1").innerHTML=data;
    }
    searchfunction(){       
        let localdata = JSON.parse(localStorage.getItem("budget"));

            let filter = document.getElementById("search").value;
            let table1 = document.getElementById("disp1");
            let table2 = document.getElementById("disp2");
            let table3 = document.getElementById("disp3");
            localdata.map((v)=>{
                if(v.name == filter || v.cost == filter){
                    let index = localdata.findIndex((v)=>v.name==filter||v.cost == filter);
                    table1.style.display='none';
                    table2.style.display='none';
                    table3.style.display='none';
                    table1.innerHTML="-"+localdata[index].cost;
                    table2.innerHTML=localdata[index].name;
                    table3.innerHTML=table3;
                }else{                    
                    event.preventDefault()
                    table1.style.display='block';
                    table2.style.display='block';
                }
            })
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


