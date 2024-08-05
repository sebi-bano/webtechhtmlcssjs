//let a=()=>{
   // console.log("hello")
//};
//a();


// function fun(){
//     console.log(this);

// };
// fun();


// let a= function (){
//     console.log(this);
// };
// a();

// function fun()
// {
//     console.log(this);
// };
// fun();

let emp1= {
    empname:"pinku",
    empid: 20,
    salary:6000,
    age:23,
};
let emp2= {
    empname:"pinki1",
    empid: 20,
    salary:6000,
    age:23,
};
let emp3= {
    empname:"pinki",
    empid: 20,
    salary:6000,
    age:23,
};

// function printdata(){
//     console.log(this.empname)

// }
// //call apply bind
// printdata.call(emp1,10,20,30)
let a=(a,b)=>{
    console.log(this.empname)
    console.log(this.empid)
    
}
a.call(emp1,10,20);