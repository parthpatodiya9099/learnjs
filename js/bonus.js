function handlesubmit() {

    let x = parseFloat(document.getElementById("bonus").value);

    let x1 = parseFloat(document.getElementById("bonus1").value);

    let x2 = parseFloat(document.getElementById("bonus2").value);
    let bs='';
    
        if (x) {
            bs = x * 0.5;
        } else {
            document.getElementById("bonusE").innerHTML = "Please Enter Salary"
        }
        if (x1) {
            bs = x1 * 0.3;
        } else {
            document.getElementById("bonus1E").innerHTML = "Please Enter Salary"
        }
        if (x2) {
            bs = x2 * 0.2;
        } else {
            document.getElementById("bonus2E").innerHTML = "Please Enter Salary"
        }
 
    

    document.getElementById("ans").innerHTML = "Bonus is:-" + bs;

    return false;
}