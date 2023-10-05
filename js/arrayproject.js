//(1)-----------------------------------------------------------
// let arr = [10,25,5,30,78];

// let ans = arr.sort((a,b)=>b-a);

// let max=ans.shift();
// console.log(max);

//(2)------------------------------------------------------------
// let arr = [10,25,5,30,78];

// let ans = arr.sort((a,b)=>a-b);

// let min=ans.shift();
// console.log(min); 

//(3)-------------------------------------------------------------
// let arr = [8,40,30,20,80,90];
// const arrsort = (arr) =>{
//     let temp;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[i]){
//                 temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(temp);
// }
// arrsort(arr);
//(3)----------------------------------------

// let arr = [10,30,20,56,89,76,46,53,69,90];

// let ans=arr.sort((a,b)=>a-b);
// console.log(ans);

//(4)-------------------------------------------------------------

// let arr = [20,46,35,52,57,86,90,98,65,48,76];

// let ans=arr.sort((a,b)=>b-a);
// console.log(ans);

//(5)-------------------------------------------------------------
// let arr = [10,20,30,40,50,60,70,80];

// let ans = arr.reverse();
// console.log(ans);

//(6)-------------------------------------------------------------

// let arr = [10,20,30,40,50];

// let ans = arr.reduce((acc,v)=>acc+v,0);
// console.log(ans);

//(7)-------------------------------------------------------------

// let arr = [10,20,30,40,50];

// let sum = arr.reduce((acc,v)=>acc+v,0);
// let avg = sum/arr.length;
// console.log(avg);

//(8)-------------------------------------------------------------

// let arr = [10,20,30,40,50];             // True

// let ans = arr.includes(20);
// console.log(ans);

//(8)-------------------------------------------------------------

// const check = (arr,ele) => {

//     let temp;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == ele){
//             temp=ele;
//             break;
//         }

//         if(temp){
//             console.log(temp + "is Available");
//         }else{
//             console.log(ele +"is not Available");
//         }
//     }
// }

// check(arr,40);

//(9)-------------------------------------------------------------

// let arr = [10, 20, 30, 20, 40, 50, 50, 50];

// const remove = (arr) => {
//     let arr1 = [];
//     arr.map(v => {
//         if (!arr1.includes(v)) {
//             arr1.push(v);
//         }
//     });
//     return arr1;
// }

// let ans = remove(arr);
// console.log(ans);

//(10)-------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let arr1=["parth","amit","krushil"];
// let arr2=[];

// for(let i=0;i<arr.length;i++){
//     arr2[i]=arr[i];
// }
// for(let i=0;i<arr1.length;i++){
//     arr2[i+arr.length]=arr1[i]
// }
// console.log(arr2);

//(11)-------------------------------------------------------------

// let arr = [1,2,3,"parth","hiru"];
// let ans = arr.filter((v)=>typeof v === "number");
// let ans1 = arr.filter((v)=>typeof v === "string");

// console.log(ans,ans1);

//(13)-------------------------------------------------------------

// let arr = [1,2,3,4,5];
// const Rotating = (arr,n) => {

//     for(let i=0;i<n;i++){
//       let ele = arr.pop();
//        arr.unshift(ele);
//     }
//    console.log(arr);
// }
 
// Rotating(arr,3);

//(14)-------------------------------------------------------------

// let arr = [10,12,41,56,87,79,96,100];

// let ans = arr.sort((a,b)=>b-a);

// console.log(ans[1]);

//(15)-------------------------------------------------------------

// let arr = [10,12,41,56,87,79,96,100];

// let ans = arr.sort((a,b)=>a-b);

// console.log(ans);
// console.log(ans[2]);

//(17)-------------------------------------------------------------19,23,24,25

// let arr=[1, 5, 2, 3];

// let sarr = arr.sort((a,b)=>a-b);
// console.log(sarr);
// if(sarr.length/2 % 0){
//     let i1 = sarr.length/2+1;
//     console.log(i1);
// }else{
//     console.log(Math.floor(sarr.length/2));
// }

//(19)-------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let arr1 = [1,2,3,4,5];

// const chack = (arr,arr1) => {
//     console.log(arr.toString() === arr1.toString());
// }

// chack(arr,arr1);

//(23)-------------------------------------------------------------
// let arr = [10,20,30,40,30,50];

// const firstoccindex = (arr , n) => {
//     let ans = arr.indexOf(n);

//     console.log(ans);
// }
// firstoccindex(arr , 30)
// //(24)-------------------------------------------------------------
// let arr = [10 ,20 ,30 ,40, 50 , 30 , 50];

// const lastoccindex = (arr ,n) => {
//     let ans = arr.lastIndexOf(n);
//     console.log(ans);
// }
// lastoccindex(arr, 50);
//(25)-------------------------------------------------------------

// let  arr = [10 ,20 ,30 ,40, 50 , 30 , 50];

// const removeoccva = (arr) => {
//     let ans = arr.filter((v) => v !== 30 && v !== 50);
//     console.log(ans);
// }
// removeoccva(arr);

//(26)-------------------------------------------------------------

// let arr = [100,8,100,44];

// const rip=(arr,old,newe)=> {
//     let ans = arr.map((v)=> v== old ? newe :v);
//     console.log(ans);
// }
// rip(arr,100,99);

//(27)-------------------------------------------------------------

// let arr = [1,2,3,4,5];
// let arr1 =[];

// arr1 =arr
// arr1.reverse();

// console.log(arr1);
//(28)-------------------------------------------------------------

// let arr = [1,2,3,4,5,7];

// flag = false;
// const sortchack = (arr) => {
//     for (let i=0 ; i<arr.langth ; i++) {
//         for (let j=i+1 ; j<arr.langth;j++) {
//             if(arr[i] < arr[j]){
//                 flag = true;
//                 break;
//             }
//         }
//     }
//     if(flag=true){
//         console.log("Ascending");
//     }else{
//         console.log("Not Ascending");
//     }
// }

// sortchack(arr);

//(29)-------------------------------------------------------------

// let arr = [6,5,4,3,2,1];

// flag = false;
// const sortchack = (arr) => {
//     for (let i=0 ; i<arr.langth ; i++) {
//         for (let j=i+1 ; j<arr.langth;j++) {
//             if(arr[i] > arr[j]){
//                 flag = true;
//                 break;
//             }
//         }
//     }
//     if(flag=true){
//         console.log("Descending");
//     }else{
//         console.log("Not Descending");
//     }
// }

// sortchack(arr);

//(30)-------------------------------------------------------------

// let arr = [10,20,30,40,50,60,70,80,90];

// const maxsum = (arr) => {

//     let sarr = arr.sort((a,b)=>b-a).slice(0,3).reduce((acc,v)=>acc+v);

//     console.log(sarr);
// }
// maxsum(arr);

