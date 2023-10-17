// class Employee {
//     id;
//     name;
//     salary;

//     constructor(i,n,s){
//         this.id=i;
//         this.name=n;
//         this.salary = s;
//     }
//     getAllInfo = () => {
//         console.log(this.id,this.name,this.salary);
//     }
// }
// class Bonus extends Employee {
//     bonus;
    
//     constructor(id,name,salary,b){
//         super(id,name,salary)
//         this.bonus=b;
//     }
//     addBonus=()=>{
//         console.log(this.name+' Bonus is :'+this.salary*this.bonus);
//     }

// }
// let b1 =new Bonus(101,"Nayan",25000,0.10);
// let b2 =new Bonus(102,"Harish",20000,0.05);
// b1.getAllInfo();
// b1.addBonus();
// b2.getAllInfo();
// b2.addBonus();


// class Computer {
//     name;
//     price;
//     company;

//     constructor(n,c){
//         this.name=n;
//         this.company=c;
//     }
//     confi = (p)=>{
//         this.price=p;
//     }
//     basicinfo=()=>{
//         console.log(this.name,this.company,this.price);
//     }
// }
// class Processor extends Computer{
//     processorname;
//     version;
//     constructor(name,company,pn,vr){
//         super(name,company)
//         this.processorname=pn;
//         this.version=vr;
//     }
//     allinfo=()=>{
//         this.basicinfo()
//         console.log(this.processorname,this.version);
//     }
// }
// let c1 = new Processor("Dell5400","Dell"," Xeon",11);
// c1.confi(40000);
// c1.allinfo();

// class Car {
//     name;
//     man_year;
//     price;
//     company;

//     constructor(n,c){
//         this.name=n;
//         this.company=c;
//     }
//     configCar=(y,p)=>{
//         this.man_year=y;
//         this.price=p;
//     }
//     displayinfo(){
//         console.log(this.name,this.man_year,this.price,this.company);
//     }
// }
// class CompanyContry extends Car{
//     contry;
//     constructor(name,man_year,contry){
//         super(name,man_year);
//         this.contry=contry;
//     }
//     allinfo(){
//         this.displayinfo()
//         console.log(this.contry);
//     }
// }
// let c1 = new CompanyContry ('kia',"seltos",'Japan');
// c1.configCar(2022,1000000);
// c1.allinfo();


// class Student {
//     id;
//     name;
//     #fees;

//     constructor(i,n,f){
//         this.id=i;
//         this.name=n;
//         this.#fees=f;
//     }

//     displayInfo(){
//         console.log(this.id,this.name);
//     } 
//     #diaplayfees(){
//        console.log("Fees : "+ this.#fees);
//     }
//     displayAll(){
//         this.displayInfo();
//         this.#diaplayfees();
//     }
// }

// class Course extends Student {
//     course_name;
//     duraction;
//     #scholarship;

//     constructor(i,n,f,c,d){
//         super(i,n,f);
//         this.course_name=c;
//         this.duraction=d;
//     }

//     getAllInfo(){
//         this.displayAll();
//         console.log(this.course_name,this.duraction);
//     }
//     set scholarship(s){
//         this.#scholarship=s;
//     }
//     get scholarship(){
//         console.log("Scholarship : "+this.#scholarship);
//     }
// }
// let c1 = new Course (101,"Darshan",40000,"ReactNative","6-Month");
// c1.getAllInfo()
// c1.scholarship=4000;
// c1.scholarship;

// //****************************************************************** */encapsulation
// class bike {
//     name;
//     model;
//     #price;
//     constructor(n,m,p){
//         this.name=n;
//         this.model=m;
//         this.#price=p;
//     }
//     diaplaydata(){
//         console.log(this.name,this.model);
//     }
//     #displayprice(){
//         console.log("Price : "+this.#price);
//     }
//     displayAll(){
//         this.diaplaydata()
//         this.#displayprice();
//     }
// }

// class company extends bike{
//     companyname;
//     #engine;
//     constructor(n,m,p,c){
//         super(n,m,p);
//         this.companyname=c;
//     }
//     displayCompanyName(){
//         console.log("Company Name : "+this.companyname);
//     }
//     set engine (e){
//         this.#engine=e;
//     }
//     get engine(){
//        console.log(this.#engine);
//     };
// }
// let b1 = new company("Splender",2022,90000,'hero');
// b1.displayAll();
// b1.displayCompanyName()
// b1.engine='Arrow';
// b1.engine;

//*******************************************************************/
// abstraction
// class Food {
//     name;
//     price;
//     #waight;

//     constructor(n,p,w){
//         this.name=n;
//         this.price=p;
//         this.#waight=w;
//     }
//     displaydata(){
//         console.log(this.name,this.price);
//     }
//     #displayprivt () {
//         console.log(this.#waight);
//     }
//     displayAll(){
//         this.displaydata();
//         console.log(this.#waight);
//     }
// }
// let f1 = new Food('Pizza',500,'300g');
// f1.displayAll();

// //*****************************************************************/Polymorphism
// class mobile {
//     name;
//     modelno;
//     constructor(n,m){
//         this.name=n;
//         this.modelno=m;
//     }
//     display(){
//         console.log(this.name,this.modelno);
//     }  
    
// }
// class body extends mobile {
//     color;
//     constructor(n,m,c){
//         super ( n , m );  
//         this.color=c;
//     }
//     display(){
//         console.log(this.color);
//     }
// }
// let m1 = new mobile("Ip-14 pro Max",'09867575');
// m1.display();

// let m2 = new body("black");
// m2.display();