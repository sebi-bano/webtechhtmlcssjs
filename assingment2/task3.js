const section = document.createElement('section');

for (let i = 1; i <= 3; i++) {
    const Section1 = document.createElement('section');
    // Section1.style.border = '1px solid black';
    // Section1.style.height = '100px';
    // Section1.style.width = '100px';
    // Section1.style.margin='5px';
    // Section1.style.padding='5px';
    // Section1.style.position=''
    Section1.className = 'small';
    section.appendChild(Section1);

        
    
}

document.body.appendChild(section);
      