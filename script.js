// should reset Contact me Form after submitting email. 
// window.onbeforeunload = () => {
//   for(const form of document.getElementsByTagName('form')) {
//     form.reset();
//   }
// }


window.addEventListener("load", () => {
  console.log("load event listener worked properly.");

  // Personal Info variables
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
  const address = {
    street_name: "7852 Pitsonyane Street",
    surburb: "Orlando West",
    city: "Johannesburg",
    postal_code : 1804,
    province: "Gauteng",
    country: "South Africa",
  };
  const contactInfo = {
    phone: +27812585187, 
    email: "mailto:tshepomasuku16@gmail.com", 
    telegram: "https://t.me/ener_ki", 
    whatsapp: "https://wa.me/27812585187" 
  };
  const personalInfo = [
    `I'm a 26 year old web developer who was born, raised and currently residing in Soweto, Orlando West.`, 
    `I was a learner who always performed academically well during my primary and secondary schooling. 
    I matriculated back in 2016 with a bachelors pass with two distinctions in mathematics 
    and physical sciences. I was then able to pursue a career in the computer science and or mathematical 
    field at the University of the Witwatersrand studying for a BSc. degree in Computational and Applied 
    mathematics from 2017 to 2019 which I did not complete due to my own personal reasons.`,
    `Since after all of my failed endevours then I was on a committed mission to redeem myself, 
    I began to learn a programming language called Python in order to become a Software Developer 
    and I ended up learning Javascript to then pursue a career in web development because rather 
    than always being logical, I could also be creative and I loved seeing my code in the browser 
    being a physical a physical representaion of something that I had programmed without being a 
    professional or experienced developer in the web development industry.`
  ];
  const eduBG = [
    "./assets/MatricCertificate.png",
    "./assets/UC-58b08a91-4d6b-415b-ae0b-27f1845895d3.jpg",
    "./assets/UC-375cd207-04bd-4c92-9148-cd6d7692b19d.jpg",
    "./assets/UC-6bcb4ea8-4462-43e1-885f-4e9155ce61b6.jpg",
  ];
  const myProjects = [{
      link: "https://lucent-baklava-2c195c.netlify.app/index.html",
      image: "./assets/Loruki.png",
      title: "Loruki",
      description: "This is a Heroku inspired responsive web-app clone.",
    }, {
      link: "https://tshepomasuku.github.io/sw-starz/",
      image: "./assets/StarWars-starz.PNG",
      title: "Star Wars: Starz",
      description: "This web-app displays Star Wars stars within cards that show their various characteristics.",
    }, {
      link: "https://feycbox.vercel.app/",
      image: "./assets/SmartBrain-feycbox.PNG",
      title: "Face Box",
      description: "Face detection web-app: By simply draging/uploading a picture with a single person in it this app should be able to detect the person's face in that picture.",
    }, {
      link: "https://profound-chaja-258ec4.netlify.app/",
      image: "./assets/CrwnClothing.png",
      title: "Crwn Cloth!ng",
      description: "This is an e-commerce prototype for an online clothing brand.",
  }];


  // Bio
  const BioDiv = document.createElement("div");
  BioDiv.innerHTML = `
    <div class="bio__text">
      <h2 class="bio__text-header">Tshepo Masuku</h2>
      <p>${bio[0]}</p>
      <p>${bio[1]}</p>
    </div>
    <div class="bio__imageContainer">
      <img class="bio__image" src="./assets/Tshepo Masuku Profile Picture.jpg" alt="ProfilePic">
    </div>
  `;
  document.getElementById("bioContainer").appendChild(BioDiv);


  // Personal Info
  const personalInfoDiv = document.createElement("div");
  personalInfoDiv.innerHTML = `
    <div class="Title">
      <h2>Personal Information</h2>
    </div>
    <div class="personalInfo">
      <div class="personalInfo__imageContainer">
        <img  class="personalInfo__image" src="./assets/Tshepo Masuku Profile Picture.jpg" alt="ProfilePic">
      </div>
      <div class="personalInfo__text">
        <p>
          My name is ${myName} ${mySurname}. <br> ${personalInfo[0]}
        </p>
        <p>${personalInfo[1]}</p>
        <p>${personalInfo[2]}</p>
      </div>
    </div>
  `;
  document.getElementById("personalInfoContainer").appendChild(personalInfoDiv);


  // Educational Background 
  const eduBGdiv = document.getElementById("div");
  eduBGdiv.innerHTML = `
    <div class="Title">
      <h2>Educational Background</h2>
    </div>
    <div class="eduBGcards">
      <div class="eduBGcard">
        <div class="eduBGcard__imageContainer">
          <img src=${eduBG[0]} alt="" class="eduBGcard__image">
        </div>
      </div>
      <div class="eduBGcard">
        <div class="eduBGcard__imageContainer">
          <img src=${eduBG[1]} alt="" class="eduBGcard__image">
        </div>
      </div>
      <div class="eduBGcard">
        <div class="eduBGcard__imageContainer">
          <img src=${eduBG[2]} alt="" class="eduBGcard__image">
        </div>
      </div>
      <div class="eduBGcard">
        <div class="eduBGcard__imageContainer">
          <img src=${eduBG[3]} alt="" class="eduBGcard__image">
        </div>
      </div>
    </div>
  `;
  document.getElementById("educationContainer").appendChild(eduBGdiv);


  // My Projects 
  const myProjectsDiv = document.createElement("div");
  myProjectsDiv.innerHTML = `
    <div class="Title">
      <h2>My Projects</h2>
    </div>
    <div class="projectCardsContainer">
    ${myProjects.map((myProject, index) => {
        <div class="projectCard" id={index}>
          <a href={myProject.link} target="_blank">
            <img class="projectCard__image" src={myProject.image} alt={myProject.title}></img>
            <h3 class="projectCard__title">${myProject.title}</h3>
          </a>
          <p class="projectCard__description">${myProject.description}</p>
        </div>
      })}
    </div>
  `;
  document.getElementById("projectsContainer").appendChild(myProjectsDiv);


  // FOOTER 
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div>
      <div class="footer__details">
        <div class="footer__address">
          <h2>My Physical Address</h2>
          <h3>
            ${address.street_name} <br>
            ${address.surburb} <br>
            ${address.city} <br>
            ${address.postal_code} <br>
            ${address.province} <br>
            ${address.country} <br>
          </h3>
        </div>
        <div class="footer__contactme">
          <h4>Call me here:</h4>
          <div  class="footer__contactme-icon">
            <a href="tel:${contactInfo.phone}">
              <img class="icon" src="https://img.icons8.com/flat-round/64/phone.png" alt="phone"/>
            </a>
          </div>
        </div>
      </div>
      <div class="footer__socialmedia">
          <a href={contactInfo.email} target="_blank">
            <img class="icon" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
          </a>
          <a href={contactInfo.telegram} target="_blank">
            <img class="icon" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/>
          </a>
          <a href={contactInfo.whatsapp} target="_blank">
            <img class="icon" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
          </a>
      </div>
    </div>
    <div class="footer__mapContainer">
      <!-- embedded Google map -->
      <div class="footer__map">
        <div id="my-map-display" class="my-map-display">
          <iframe class="iframe" frameborder="0" 
            src="https://www.google.com/maps/embed/v1/place?q=7852+Pitsonyane+Street,+Orlando+West,+Soweto,+South+Africa&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
          </iframe>
        </div>
        <a class="embed-map-html" href="https://www.bootstrapskins.com/themes" id="grab-maps-authorization">
          premium bootstrap themes
        </a>
        <style>#my-map-display img.text-marker{max-width:none!important;background:none!important;}img{max-width:none}
        </style>
      </div>
    </div>
  `;
  document.getElementById("footer").appendChild(footer);
});
