
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const phoneError = document.getElementById('phone-error');
  const messageError = document.getElementById('message-error');
  const submitError = document.getElementById('submit-error');
  const successMessage = document.getElementById('success-message');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const messageInput = document.getElementById('contact-message');
 

function validateName(){
    const name = nameInput.value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required'; 
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ 
        nameError.innerHTML = 'Write full name';
        return false
    }
    nameError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}


function validatePhone(){
    const phone = phoneInput.value;
    if(phone.length == 0){
    phoneError.innerHTML = 'Phone no. is required'; 
    return false;
    }
    if (phone.length !== 10){
    phoneError.innerHTML = 'Phone no. should be 10 digits'; 
    return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'Only digits Please!';
    return false;
    }

    phoneError.innerHTML = "<i class='bx bxs-check-circle'></i>";
    return true;
}


function validateEmail(){
    const email = emailInput.value;
    if(email.length == 0){
    emailError.innerHTML = 'Email is required'
    return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid'
    return false;
    }
    emailError.innerHTML =
    "<i class='bx bxs-check-circle'></i>";
    return true;
}

function validateMessage(){
    var message = messageInput.value; 
    var required = 30;
    var left = required - message.length;
    if(left > 0) {
    
    messageError.innerHTML = left + 'more characters required'; 
    return false;
  
    }
    messageError.innerHTML = "<i class='bx bxs-check-circle'></i>"; 
    return true;
}
function validateForm(e){
    e.preventDefault();
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        successMessage.innerText=''
        submitError.innerHTML = 'Please Enter the Correct Information';
        return ;
    }
    submitError.innerHTML = '';
    nameInput.value='';
    nameError.innerHTML = "";
    emailInput.value='';
    emailError.innerHTML = "";
    phoneInput.value='';
    phoneError.innerHTML = "";
    messageInput.value='';
    messageError.innerHTML = ""
    successMessage.style.display = 'block' ;
    successMessage.style.background = 'green' ;
    successMessage.style.padding = '20px' ;
    successMessage.style.borderRadius = '5px' ;
    successMessage.style.marginTop = '20px' ;
    successMessage.innerText = 'Thank you for Your message! Our representative will contact with you soon!';
    // return true;
  
}
