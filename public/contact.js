// Contact me Form - Validation.
function validateForm() {
  // Name(s)*, Surname*, Email Address*, Subject* & Your Message/Query*.
	const nameInput = document.getElementById("names");
	const surnameInput = document.getElementById("surname");
	const emailInput = document.getElementById("email");
	const subjectInput = document.getElementById("subject");
	const messageInput = document.getElementById("message");
  
  // Boolean Values to check if a specific input is valid.
	let isNameInputValid = false;
	let isSurnameInputValid = false;
	let isEmailInputValid = false;
	let isSubjectInputValid = false;
	let isMessageInputValid = false;
  let isFormValidated = false;
  
  // must be able to remove/add the html tag's hidden class for a specific invalid input in the form. 
	if (nameInput.value.trim() === "") {
    const errorSpan = document.getElementById("namesSpan");
    errorSpan.innerText = "name(s) input invalid";
    errorSpan.classList.remove("hidden");
	} else {
    const errorSpan = document.getElementById("namesSpan");
    errorSpan.classList.add("hidden");
    isNameInputValid = true;
  }

  if (surnameInput.value.trim() === "") {
    const errorSpan = document.getElementById("surnameSpan");
    errorSpan.innerText = "surname input invalid";
    errorSpan.classList.remove("hidden");
	} else {
    const errorSpan = document.getElementById("surnameSpan");
    errorSpan.classList.add("hidden");
    isSurnameInputValid = true;
  }

  if (emailInput.value.trim() === "") {
    const errorSpan = document.getElementById("emailSpan");
    errorSpan.innerText = "email input invalid";
    errorSpan.classList.remove("hidden");
	} else {
    const errorSpan = document.getElementById("emailSpan");
    errorSpan.classList.add("hidden");
    isEmailInputValid = true;
  }

  if (subjectInput.value.trim() === "") {
    const errorSpan = document.getElementById("subjectSpan");
    errorSpan.innerText = "subject input invalid";
    errorSpan.classList.remove("hidden");
	} else {
    const errorSpan = document.getElementById("subjectSpan");
    errorSpan.classList.add("hidden");
    isSubjectInputValid = true;
  }

  if (messageInput.value.trim() === "") {
    const errorSpan = document.getElementById("messageSpan");
    errorSpan.innerText = "message input invalid";
    errorSpan.classList.remove("hidden");
	} else {
    const errorSpan = document.getElementById("messageSpan");
    errorSpan.classList.add("hidden");
    isMessageInputValid = true;
  }

  isFormValidated = isNameInputValid && 
    isSurnameInputValid && isEmailInputValid && 
    isSubjectInputValid && isMessageInputValid;
  return isFormValidated;
}

function handleSubmit(event) { 
  const isFormValidated = validateForm();
  // console.log('HandleSubmit() -- isFormValidated :>> ', isFormValidated); 
  if (isFormValidated === false) {
    event.preventDefault(); 
  };
}

function handleClear() { 
  // Get the HTML elements from the DOM using their id's.
  const namesInput = document.getElementById("names");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
	const subjectInput = document.getElementById("subject");
	const messageInput = document.getElementById("message");
  
  // Change the DOM elements values into empty strings.
  namesInput.value = "";
  surnameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
}
