// let arr=[10,20,30,40,70,80]
// arr.pop();
// console.log(arr);

let arr1=[10,20,30,40,70,80,8,67,78,90,100,500]
// console.log(arr,join(" "))
// let arr2=[10,20,30,40,70,80,8,67,78,90,100,500,70,50,100]
// console.log(arr1.concat(arr2));
// console.log(arr1.reverse());
// console.log(arr1.sort((a,b)=>a-b));

// const arr=[[[[[[[10,20,30]]],70,80]]]]
// console.log(arr.flat(3));



let emp={
    ename:"kishan",
    empid:20,
    salary:[20,40],
    job:"ase",
    // dance:function dancing(){
    //     console.log("dancing");
    // },
    dancing(){
         console.log("dancing");},
};


// emp.dance();
// emp.dancing();
// Object.keys(emp).forEach((ele,i,arr)=>{


//     console.log(emp[ele]);
// }
// );

// Object.values(emp)
// console.log(emp);

// Object.entries(emp)
// console.log(emp);


// let emp1={
//     ename:"kishan",
//     empid:20,
//     salary:[20,40],
//     job:"ase",
// }
// let emp2={
//     ename:"kishan",
//     empid:20,
//     salary:[20,40],
//     job:{
//         jobname:"ase"
//     }
// }

// console.log(Object.isSealed(emp2));

// console.log(Object.isFrozen(emp1));

// console.log(emp2.hasOwnProperty("ename"));

// console.log(emp2.job.jobname);


// let str="velocitai";
// console,log(typeof str);


let str="velocitai";
// console.log(str.slice(2,3));
// console.log(str.substr(2,3));
// console.log(str.substring(2,3));
console.log(str.replace("ai","x"));

let str1="saas is a css framework";
console.log(str1.replace("saas","taiwind"));

let str2="java and java script both are diff";
console.log(str2.replaceAll("java","python"));

let str6="java and java script both are diff             ";
let str7="        python and java script both are diff";
// console.log(str5.toLowerCase(str5));
// console.log(str5.toUpperCase(str5));
// console.log(str6.concat(str7));
// console.log(str7.trimStart(str7));
// console.log(str6.trimEnd(str6));

let mob="7007056813";
// let mob1=mob.slice(6);
// console.log(mob1);
// console.log(mob1.padStart(10,"*"));

// let mob1=mob.slice(0,4);
// console.log(mob1);
// console.log(mob1.padEnd(10,"*"));

// console.log(str6.charAt(3));
// console.log(String.fromCharCode(97));
// console.log(str6.split());

let arr=[10,20,30,40];
for(const x in arr){
    console.log(x);
}

let emp2={
        ename:"kishan",
        empid:20,
        salary:[20,40],
}
for(const x in emp2){
    console.log(x);
}





