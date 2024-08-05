// console.log(document.getElementById("container"));
// console.log(document.getElementsByClassName("box"));
//we will return html collection what is html collection its array like  abject [    ] object not array

// only pass section name
// let htmlcollection = document.querySelector("box");
// console.log(htmlcollection);
// let htmlcollection = document.querySelectorAll("box");
// console.log(htmlcollection);


//how to modify ducument by
// let section=document.getElementById("container")
// // if we change background color
// section.style.backgroundColor="red";
// section.style.borderRadius="50%";


// let section2=document.getElementsByClassName("box")
// section2[1].style.backgroundColor="blue";
// section2[1].style.borderRadius="50%";

// let section3=document.getElementsByClassName("box")
// section3[2].style.background="linear-gradient(to right,red,blue,green";
// section3[2].style.borderRadius="50%";
// section3[2].style.boxshadow ="0px 10px 20px black";




// let section=document.createElement("section");
// section.setAttribute("class","container");
// section.setAttribute("id","container");
// section.innerText="hello javascript";
// let body=document.querySelector("body")
// body.append(section)
// console.log(section);

// let h1=document.createElement("section");
// h1.setAttribute("class","container")
// h1.innerText="hello javascript";
// let body=document.querySelector("body")
// body.appendChild(h1)// only one tag use
// console.log(h1);


// let h2=document.createElement("section");
// h2.setAttribute("class","container")
// h2.innerText="hello everyone";
// let b=document.querySelector("body")
// b.append(h1,h2)// used multiple tag taget 
// console.log(h2);


// let container=document.querySelector("#container")
// container.remove();

// let container=document.getElementsByClassName("box")
// container[1].remove();


let section=document.querySelector("section")
section.innerHTML="<h1> hi i am </h1>";// replace all element thi h1 tag
// section.innerHTML+="<h1> hi i am </h1>";//not replace all element
console.log(section.innerHTML);
console.log(section);
console.log(section.children);
// section.innerHTML="<p></p>"