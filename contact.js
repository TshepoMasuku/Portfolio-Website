// should reset Contact me Form after submitting email. 
// window.onbeforeunload = () => {
//   for(const form of document.getElementsByTagName('form')) {
//     form.reset();
//   }
// }


// Contact me Form - Validation.
// must be able to remove the span-tag hidden class for an exact input-id in the form. 
// Name(s)*
// Surname*
// Email Address*
// Subject*
// Your Message/Query*
const nameInput = document.getElementById("names");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementsByClassName("emailForm__submitBtn");

// submitBtn.addEventListener(("click") => {
//   const requiredInput = document.getElementsByTagName("span");
//   requiredInput.classList.remove("hidden");
// });

function handleSubmit(event) {
	event.preventDefault();
	console.log(event);
}
