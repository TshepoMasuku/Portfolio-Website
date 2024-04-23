// load HTML and CSS dynamically with JS into website after the window loads.
window.addEventListener("load", () => {
  loadBio();
});


function loadBio() {
  const myName = "Tshepo";
  const mySurname = "Masuku";
  const bio = [
    `I'm a web developer who was born, raised and currently residing in Soweto, Orlando West.`, 
    `I'm a person who is reserved, ambiverted and a deep thinker that loves learning skills that improve my life experience. 
    I enjoy activities that stimulate my mind, body and spirit. I'm also a big movie, series and anime geek. 
    A big fan of thought-provoking documentaries that grow and expand my awareness of our world. 
    I'm also a tech geek who is currently learning and constantly improving my web development skills
    after being inspired by the tons of websites which I have visited ever since I could surf the net.`
  ];

  const BioSection = document.getElementById("bioSection");
  const BioDiv = document.createElement("div");
  BioDiv.classList.add("bioContainer");
  BioDiv.innerHTML = `
    <div class="bio__text">
      <h2 class="bio__text-header">${myName} ${mySurname}</h2>
      <p>${bio[0]}</p>
      <p>${bio[1]}</p>
    </div>
    <div class="bio__imageContainer">
      <img class="bio__image" src="./assets/Tshepo Masuku Profile Picture.jpg" alt="ProfilePic">
    </div>
  `;
  BioSection.appendChild(BioDiv);
}
