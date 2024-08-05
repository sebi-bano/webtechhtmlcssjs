let display=document.querySelector(".display");
let buttons=document.getElementsByTagName("button");
// console.log(button);


let finalVal=Number(display.innerText);
let inputVal =0;
Array.from(buttons).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        let Val = e.target.innerText;
            if(
                Val !="+" &&
                Val !="/" &&
                Val !="*" &&
                Val !="cl" &&
                Val !="-" &&
                Val !="=" 
            ){
                inputVal=Val;
                display.innerText = Val;

            }
            if(e.target.innerText == "+"){
                console.log(inputVal);
                // display.innerText+=Val;
                add(inputVal);

            }
        
    });
});

let add=(Val)=>{
    console.log(Val);
    finalVal +=Number(Val);
    display.innerText=finalVal;
};




