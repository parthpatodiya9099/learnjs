// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(person.name,person["Age"]);

// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// person.map((v,i)=>{
//     console.log(v.name,v.age);
// });

// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ] 

// person.map((v)=>{
//     console.log(v.name,v.age);
//     v.course.map((v1)=>{
//         console.log(v1);
//     })
// });

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for(let i in myObj){   
//     if(i === "cars"){
//         for(let j in myObj[i]){
//             console.log(myObj[i][j]);
//         }
//     }else{
//         console.log(myObj[i]);
//     }
// }


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v)=>{
//     console.log(v.name,v.age);
//     for(let i in v.course){
//         console.log(v.course[i]);
//     }
// })

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }

// for(let i in data){
//     if(i === "courses"){
//         data[i].map((v)=>{
//             console.log(v);
//         })
//     }else if(i === "personal_info"){
//        console.log(data.personal_info.name,data.personal_info.age,data.personal_info.city);
//     } else{
//         for(let k in data[i]){
//             for(let j in data[i][k]){
//                 console.log(i,k,j,data[i][k][j]);
//             }
//         }
//     }
// }

//*************************************************************************************************

// let person = {
//     name : "Amit",
//     Age: 25
// }
// let person1 = {
//     name : "Amit",
//     Age: 25
// }
// // person.Age="29" // Update
// // person.id=101 // Add
// // delete person.id //Delete

// // console.log(person);
// const arr = () => {
//     for(let k in person){
//         if(person[k] !== person1[k]){
//             return false
//         }
//     }
//     return true
// }
// let ans = arr();
// console.log(ans);

