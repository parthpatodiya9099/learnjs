function handlesubmit() {
    // console.log("ok");

    let p = document.getElementById("amount").value;
    // console.log(p);
    let r = document.getElementById("rate").value;
    // console.log(r);
    let t = document.getElementById("time").value;
    // console.log(t);
    let select = document.getElementById("select").value;

    let pErr = true, rErr = true; tErr = true;

    if (p) {
        if (p > 0) {
            document.getElementById("amounterr").innerHTML = ''
            pErr = false;
        } else {
            document.getElementById("amounterr").innerHTML = 'please enter valid salary'
        }

    } else {
        document.getElementById("amounterr").innerHTML = 'please enter salary'
    }

    if (r) {
        if (r > 0) {
            document.getElementById("rateerr").innerHTML = ''
            rErr = false;
        } else {
            document.getElementById("rateerr").innerHTML = 'please enter valid rate'
        }

    } else {
        document.getElementById("rateerr").innerHTML = 'please enter rate'
    }

    if (t) {
        if (t > 0) {
            document.getElementById("timeerr").innerHTML = ''
            tErr = false;
        } else {
            document.getElementById("timeerr").innerHTML = 'please enter valid time'
        }

    } else {
        document.getElementById("timeerr").innerHTML = 'please enter time'
    }

    // if(select === '0'){
    //     document.getElementById("error").innerHTML = 'please enter'
    // }else{
    //     document.getElementById("error").innerHTML = ''
    // }

    if (pErr || rErr || tErr) {
        return false;
    } else {
        let ans;
        if (select === 'y') {
            ans = (p * r * t) / 100;
        } else if (select === 'm') {
            ans = (p * r * t) / 1200;
        }
        console.log(ans);

        document.getElementById("answer").innerHTML = ans;
    }
}