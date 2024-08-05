// let ol=document.querySelector("ol");

// let cities=["delhi","noida","pune","mumbai","agra","lucknow","gurugram","goa","allahabd","raebali"];
// cities.forEach((ele,i,arr)=>{
//    ol.innerHTML+=`<li>${ele}</li>`
// });

// let option=document.querySelector("select")
// let cities=["delhi","noida","pune","mumbai","agra","lucknow","gurugram","delhi","noida","pune","goa","allahabd","raebali","lucknow","gurugram","goa","pune","mumbai","agra","lucknow"];
// cities.forEach((ele,i,arr)=>{
//     option.innerHTML+=`<option>${ele}</option>`
// });


// const section = document.createElement('section');

//         // Create three block elements
//         for (let i = 0; i < 2; i++) {
//             const block = document.createElement('section');
//             block.classList.add('block');
//             section.appendChild(block);
//         }

//         // Append section to the body
//         document.body.appendChild(section);

// Get the main section by its ID
// Create the main section
const Section = document.createElement('section');
// mainSection.id = 'main-section';
//Section.style.border = '5px solid blue';
// mainSection.style.padding = '160px';
// mainSection.style.margin = '160px';
//Section.style.height = '500px';
//Section.style.width = '500px';

// Create three new smaller sections
for (let i = 1; i <= 3; i++) {
    // Create a new section element
    const Section1 = document.createElement('section');
    
    // Set some attributes or content for the new section
    //newSection.id = `small-section-${i}`;
    Section1.style.border = '1px solid black';
    Section1.style.height = '100px';
    Section1.style.width = '100px';
    Section1.style. display = 'flex';
    Section1.style.alignItems = 'center';
    
    // Append the new section to the main section
    Section.appendChild(Section1);
}

// Append the main section to the body of the document
document.body.appendChild(Section);
