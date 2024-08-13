// let section=document.querySelector('section');
let googleNews=document.querySelector(".googleNews");
let bussiness=document.querySelector(".bussiness");
let Entertainment=document.querySelector(".Entertainment");
let Science=document.querySelector(".Science");
let sports=document.querySelector(".sports");
let popupbody=document.querySelector(".popupbody");
let crossbutton=document.querySelector(".crossbutton");





let fetchMovie=async(url,container)=>{
    let response=await fetch(url);
    let data= await response.json();
    console.log(data);
    data.articles.filter((ele)=>ele.urlToImage!=null).forEach((ele, index, arr) => {
        displayNews(ele,container);
    
       });
       // filer((ele.urlToImage !=null))
}; 
fetchMovie("https://newsapi.org/v2/everything?q=apple&from=2024-08-07&to=2024-08-07&sortBy=popularity&apiKey=d1c77714c85c47e182c914b6d01743af",googleNews);
fetchMovie("https://newsapi.org/v2/everything?q=tesla&from=2024-07-12&sortBy=publishedAt&apiKey=d1c77714c85c47e182c914b6d01743af",bussiness);
fetchMovie("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d1c77714c85c47e182c914b6d01743af",Entertainment);
fetchMovie("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d1c77714c85c47e182c914b6d01743af",Science);
fetchMovie("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d1c77714c85c47e182c914b6d01743af",sports);


let displayNews=(data,container)=>{
    let cards=document.createElement("div");
    cards.setAttribute("class","cardcont");
    cards.innerHTML=`<img src="${data.urlToImage}" alt="" class="cardimg">
                             <p>${data.title}</p>
                             <p>${data.author}</p>
                             <p>${data.publisheAt}</p>`;

   
  cards.addEventListener("click",(e)=>{
    popupbody.style.visibility="visible";
  });                          
 container.append(cards);            
};

let displaypopupdate=()=>{

}
crossbutton.addEventListener("click",()=>{
    popupbody.style.visibility="hidden";
})

// let displayUser=(data)=>{
//     let card = document.createElement("div");
//     card.setAttribute("class","card");
//     card.innerHTML=`<video src="${data.trailer}"  controls autoplay=1></video>
//                     <h4>${data.director}</h4>
//                       <h4>Rating: ${data.rating} </h4>`;
//     section.append(card);
// };




