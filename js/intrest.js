function handlesubmit() {
    event.preventDefault();

    // console.log("ok");

    let p=document.getElementById("amount").value;
    // console.log(p);
    let r=document.getElementById("rate").value;
    // console.log(r);
    let t=document.getElementById("time").value;
    // console.log(t);
    let select=document.getElementById("select").value;

    if(p === ''){
        document.getElementById("amounterr").innerHTML = 'please enter salary'
    }else{
        if(p>0){
            document.getElementById("amounterr").innerHTML = ''
        }else{
            document.getElementById("amounterr").innerHTML = 'please enter valid salary'
        }
    }

    if(r === ''){
        document.getElementById("rateerr").innerHTML = 'please enter rate'
    }else{
        if(r>0){
            document.getElementById("rateerr").innerHTML = ''
        }else{
            document.getElementById("rateerr").innerHTML = 'please enter valid rate'
        }
    }

    if(t === ''){
        document.getElementById("timeerr").innerHTML = 'please enter time'
    }else{
        if(t>0){
            document.getElementById("timeerr").innerHTML = ''
        }else{
            document.getElementById("timeerr").innerHTML = 'please enter valid time'
        }
    }

    // if(select === '0'){
    //     document.getElementById("error").innerHTML = 'please enter'
    // }else{
    //     document.getElementById("error").innerHTML = ''
    // }
    
    let ans;
    if(select === 'y'){
        ans=(p * r * t) / 100;
    }else if(select === 'm'){
        ans=(p * r * t) / 1200;
    }else{
        ans='';
    }
    console.log(ans);

    document.getElementById("answer").innerHTML = ans;
}