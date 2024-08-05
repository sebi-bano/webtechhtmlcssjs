// let emp={
//     empname:"sebi",
//     id:20,
//     salary:2000,
// };
// let[empename,id]=[...emp];

localStorage.setItem("password","12345678");
console.log(localStorage.getItem("password"));
// console.log(localStorage.removeItem("password"));

let a="pass";
localStorage.setItem(`${a}` ,"1234");