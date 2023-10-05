const hendlesubmit = () => {

    let number = parseInt(document.getElementById("number").value);
    let dop1 = document.getElementById("dop1").value;
    let dop2 = document.getElementById("dop2").value;
    let ans='';

    if (number>0) {
        if (dop1 === "c" && dop2 === "k") {
            ans = number / 100000;
        }else if (dop1 === "c" && dop2 === "m") {
            ans = number / 100;
        }else if (dop1 === "c" && dop2 === "c") {
            ans = number;
        }
    
        if (dop1 === "k" && dop2 === "c") {
            ans = number * 100000;
        }else if (dop1 === "k" && dop2 === "m") {
            ans = number * 1000;
        }else if (dop1 === "k" && dop2 === "k") {
            ans = number;
        }
    
        if (dop1 === "m" && dop2 === "c") {
            ans = number * 100;
        }else if (dop1 === "m" && dop2 === "k") {
            ans = number / 1000;
        }else if (dop1 === "m" && dop2 === "m") {
            ans = number ;
        }
    }else {
       document.getElementById("numberE").innerHTML="Please Enter Value";
    }
    console.log(ans);


    document.getElementById("ans").innerHTML=ans;

    return false;


}
