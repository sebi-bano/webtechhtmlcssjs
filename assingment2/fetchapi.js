// let fetchData=fetch("https://api.github.com/users")
// .then((res)=>{
// //console.log(fetchData);
// return  res.json();
// })
// .then((data)=>{
//     console.log(data);
    
//     });

let section=document.querySelector('section');

let fetchData= async ()=>{ 
    let response = await fetch("https://api.github.com/users"); // here we apply await for , when the completely execution will done pointer will wait for particular postion
    let data =  await response.json(); // here on the place of .then , we apply await to resolved the promise
   // console.log(data);
   data.forEach((ele, index, arr) => {
    console.log(ele);
    displayUser(ele);

   });
}
fetchData();

let displayUser=(data)=>{
    let card = document.createElement("div");
    card.setAttribute("class","card");
    card.innerHTML=`<img src="${data.avatar_url }" alt="userimage">
                    <h1>${data.login }</h1>
                      <p>${data.Id} </p>`;
                      
                
      section.append(card);
    
    
};