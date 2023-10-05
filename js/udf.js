// function greeting(){
//     console.log("Hello Surat"); 
// }
// greeting();

// const userAge = (Age) => {  //Arrow Function
//     let ans;

//     ans = 2023-Age;
//     return ans;
// }

// let res = userAge(2005);
// console.log(res);

// function userAge1 (Uage){ // Normel Function
//     let ans;

//     ans = 2023-Uage;
//     return ans;
// }

// let res1 = userAge(2000);
// console.log(res1);

const Costing = (Plase) => {
    if(Plase==="Goa"){
        return 35000;
    }else if(Plase==="Manali"){
        return 45000;
    }
}
const Packges = (Plase) => {
    let cost1 = Costing(Plase);
    let Meg;
    Meg = Plase + " "+"CostingYou"+" "+cost1+" "+".";
    return Meg;
}

console.log(Packges('Goa'));
console.log(Packges('Manali'));
