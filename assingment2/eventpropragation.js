let main1=document.querySelector(".main1")
main1.addEventListener("click",(e)=>{
    e.stopPropagation()
    main1.style.backgroundColor="red"
})


let main2=document.querySelector(".main2")
main2.addEventListener("click",(e)=>{
    e.stopPropagation()
    main2.style.backgroundColor="blue"
})

let main3=document.querySelector(".main3")
main3.addEventListener("click",(e)=>{
    e.stopPropagation()

    main3.style.backgroundColor="green"
})
