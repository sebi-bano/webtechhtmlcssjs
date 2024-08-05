// setTimeout(()=>{
//     console.log("hello bhai")
// },5000);
// setTimeout(()=>{
//     console.log("hello bhai")
// },3000);

// setTimeout(()=>{
//     console.log("hello bhai")
// },9000);
// setTimeout(()=>{
//     console.log("hello bhai")
// },7000);

let setdata=setInterval(()=>{
    console.log("hello")
    console.log("hello2")
},3000);

setInterval(() => {
    clearInterval(setdata);
    
});