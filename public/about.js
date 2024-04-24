// load HTML and CSS dynamically with JS into website after the window loads.
window.addEventListener("load", () => {
  loadPersonalInfo();
  loadEducationalBackground();
  loadMyProjects();
});


function loadPersonalInfo() {
  const myName = "Tshepo";
  const mySurname = "Masuku";
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

  const personalInfoDiv = document.getElementById("personalInfoContainer") 
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
}


function loadEducationalBackground() { 
  const eduBG = [
    "./assets/MatricCertificate.png",
    "./assets/UC-58b08a91-4d6b-415b-ae0b-27f1845895d3.jpg",
    "./assets/UC-375cd207-04bd-4c92-9148-cd6d7692b19d.jpg",
    "./assets/UC-6bcb4ea8-4462-43e1-885f-4e9155ce61b6.jpg",
  ];
  
  const eduBGdiv = document.getElementById("educationContainer");
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
}


function loadMyProjects() { 
  const myProjectsArray = [
    {
      image: "./assets/Loruki.png",
      title: "Loruki",
      description: "This is a Heroku inspired responsive web-app clone.",
      techStack: ["HTML", "CSS"],
      projectLink: "https://lucent-baklava-2c195c.netlify.app/index.html",
      githubLink: "https://github.com/TshepoMasuku/Loruki",
    }, {
      image: "./assets/StarWars-starz.PNG",
      title: "Star Wars: Starz",
      description: "This web-app displays Star Wars stars within cards that show their various characteristics.",
      techStack: ["HTML", "CSS", "JS", "React"],
      projectLink: "https://tshepomasuku.github.io/sw-starz/",
      githubLink: "https://github.com/TshepoMasuku/sw-starz",
    }, {
      image: "./assets/SmartBrain-feycbox.PNG",
      title: "Face Box",
      description: "Face detection web-app: By simply draging/uploading a picture with a single person in it this app should be able to detect the person's face in that picture.",
      techStack: ["HTML", "CSS", "Tachyons", "JS", "React"],
      projectLink: "https://feycbox.vercel.app/",
      githubLink: "https://github.com/TshepoMasuku/feycbox",
    }, {
      image: "./assets/CrwnClothing.png",
      title: "Crwn Cloth!ng",
      description: "This is an e-commerce prototype for an online clothing brand.",
      techStack: ["HTML", "CSS", "JS", "React", "Firebase"],
      projectLink: "https://profound-chaja-258ec4.netlify.app/",
      githubLink: "https://github.com/TshepoMasuku/CrwnClothing",
    }
  ];

  const loadingProjects = () => {
    myProjectsArray.map((myProject, index) => {
      const projectCardsDiv = document.getElementById("projectCardsContainer"); 
      const projectCard = document.createElement("div"); 
      projectCard.innerHTML = `
        <div class="projectCard" id=${index}>
          <img class="projectCard__image" src=${myProject.image} alt=${myProject.title}></img>
          <h3 class="projectCard__title">${myProject.title}</h3>
          <p class="projectCard__description">${myProject.description}</p>
          <p class="projectCard__techStack">Tech Stack: ${myProject.techStack.join(", ")}.</p>
          <div class="projectCard__iconLink">
            <a href=${myProject.projectLink} target="_blank">
              <img width="18" height="18" src="https://img.icons8.com/small/32/external-link.png" alt="external-link"/> View Project 
            </a>
          </div>
          <div class="projectCard__iconLink">
            <a href=${myProject.githubLink} target="_blank">
              <img width="18" height="18" src="https://img.icons8.com/small/32/github.png" alt="github"/> GitHub Code
            </a>
          </div>
        </div>
      `
      return(projectCardsDiv.appendChild(projectCard));
    })
  };
  loadingProjects();
}
