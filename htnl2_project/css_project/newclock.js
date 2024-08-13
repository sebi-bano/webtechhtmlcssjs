let sec=document.querySelector(".n1");
let min=document.querySelector(".n2");
let hr=document.querySelector(".n3");

setInterval(() => {
    let date=new Date();
    let sec1=date.getSeconds();
    let min1=date.getMinutes();
    let hr1=date.getHours();

    sec.style.transform=`rotate(${sec1*6}deg)`;
    min.style.transform=`rotate(${min1*6}deg)`;
    hr.style.transform=`rotate(${hr1*30}deg)`;
    
}, 1000);

