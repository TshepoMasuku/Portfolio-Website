// load HTML and CSS dynamically with JS into website after the window loads.
window.addEventListener("load", () => {
  loadFooter();
});


function loadFooter() {
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

  const footer = document.getElementById("footer");
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
}
