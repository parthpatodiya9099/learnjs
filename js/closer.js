// let age=21; // Globle Variable

// const persnolInfo = (name) => { // Outer Function
//     let edu = "bca";    // Outer Function variable And Local Variable
//     return allInfo = (salary) => {  //Inner Function 
//         console.log(age);
//         console.log(name);
//         console.log(edu);

//         console.log(salary);
//     }
// }
// let res = persnolInfo("Dhruvi");    //Function's Call
// console.log(res);
// res(80000);

const Counter = () =>{
    let count = 0;

    return ()=>{
        count = count +1;
        console.log(count);
    }
}
let res = Counter();

res();
res();