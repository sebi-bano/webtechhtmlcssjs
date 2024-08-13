let section = document.querySelector('section');

let fetchMovie = async () => {
    try {
        let response = await fetch("https://freetestapi.com/api/v1/movies");
        let data = await response.json();
        console.log(data); // Log the data to inspect the structure
        data.forEach((ele) => {
            console.log(ele);
            displayUser(ele);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchMovie();

let displayUser = (data) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    // Use a known working video URL for demonstration purposes
    let videoUrl = data.trailer || 'https://www.w3schools.com/html/mov_bbb.mp4';

    card.innerHTML = `<video src="${videoUrl}" controls autoplay></video>
                      <h4>${data.director}</h4>
                      <h4>Rating: ${data.rating}</h4>`;
    section.append(card);
};
