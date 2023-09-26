const handlesubmit = () => {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let d = document.getElementById("date").value;
    let date = new Date(d);
    let age = 2023 - date.getFullYear();
    let premium=' ';
    // console.log(age);

    if (age > 18 && age < 25) {
        premium = 1000;
    } else if (age > 26 && age < 35) {
        premium = 1500
    } else if (age > 36 && age < 45) {
        premium = 2000
    } else if (age > 45) {
        premium = 2500
    }
    // console.log(premium);
    let Occupation = document.getElementById("Occupation").value;
    let ex_pem
    if(Occupation == "se"){
        ex_pem = premium + premium*0.10;
    }else if(Occupation == "sa"){
        ex_pem = premium;
    }
    // console.log(ex_pem);
    let Annual = document.getElementById("Annual").value;    
    let pre_income;
    if (Annual == "a") {
        pre_income = 5000000;
    } else if (Annual == "b") {
        pre_income = 10000000;
    } else if (Annual == "c") {
        pre_income = 15000000;
    } else if (Annual == "d") {
        pre_income = 20000000;
    }

    let ins_amount = parseInt(document.getElementById("ins_amount").value);
    let amount_ans=' ';
    if (Annual == "a" && ins_amount <=5000000) {
        amount_ans=ins_amount;
        document.getElementById("disp").style.display = 'block';
        document.getElementById("error").innerHTML=' ';
    } else if (Annual == "b" && ins_amount <=10000000) {
        amount_ans=ins_amount;
        document.getElementById("disp").style.display = 'block';
        document.getElementById("error").innerHTML=' ';
    } else if (Annual == "c" && ins_amount <=15000000) {
        amount_ans=ins_amount;
        document.getElementById("disp").style.display = 'block';
        document.getElementById("error").innerHTML=' ';
    } else if (Annual == "d" && ins_amount <=20000000) {
        amount_ans=ins_amount;
        document.getElementById("disp").style.display = 'block';
        document.getElementById("error").innerHTML=' ';
    }else {
        document.getElementById("error").innerHTML="Invalde Amount";
    }
    
    // console.log("income"+ins_amount);

    let smoke = document.getElementById("smoke").value;
    let smoke_ans=0;
    
    if(smoke == "y"){
        smoke_ans = ex_pem + ex_pem*0.20;
    }else if(smoke == "n"){
        smoke_ans = ex_pem;
    }else{
        smoke_ans=0;
    }
    // console.log(smoke_ans);

    let print = "";
    print += "<table border='1'>";
    print += "<tr>"
    print += "<th>Name</th>"
    print += "<th>Age</th>"
    print += "<th>Mobile Number</th>"
    print += "<th>Insurance Amount</th>"
    print += "<th>Premium</th>"
    print += "</tr>"

    print += "<tr>"
    print += "<td>"+name+"</td>"
    print += "<td>"+age+"</td>"
    print += "<td>"+number+"</td>"
    print += "<td>"+amount_ans+"</td>"
    print += "<td>"+smoke_ans+"</td>"
    print += "</tr>"
    print += "</table>"

   
    document.getElementById("disp").innerHTML=print;

    return false
}


