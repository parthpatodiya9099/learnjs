function handlesubmit() {
    event.preventDefault();

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // console.log(height);
    // console.log(weight);

    if (height === '') {
        document.getElementById("result").innerHTML = 'please enter height'
    } else {
        if (height > 50 && height <= 300) {
            document.getElementById("result").innerHTML = ''
        } else {
            document.getElementById("result").innerHTML = 'please enter valid height'
        }
    }

    if (weight === '') {
        document.getElementById("error").innerHTML = 'please enter weight'
    } else {
        if (weight > 10 && weight <= 200) {
            document.getElementById("error").innerHTML = ''
        } else {
            document.getElementById("error").innerHTML = 'please enter valid weight'
        }
    }

    let m, bmi;

    if ((height > 0 && height <= 300) && (weight > 10 && weight <= 200)) {
        m = height / 100;
        console.log(m);
        bmi = weight / (m * m);
        console.log("bmi is", bmi);
    } else {
        bmi = '';
    }
    document.getElementById("check").innerHTML = bmi;

    let rate;
    
    if (bmi=='') {
        rate = '';
        
    } else if (bmi < 18.6) {
        rate = "under weight";

    } else if (bmi <= 24.9) {
        rate = "normal range";

    } else if (bmi > 24.9) {
        rate = "overweight";

    }
    document.getElementById("rating").innerHTML = rate;
}