/*java script for 1st page LW*/
var counter=1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter>4){
		counter =1;
	}
},5000);

//show full product 
function openForm1() {
  document.getElementById("product-block1").style.display = "block";
}
function closeForm1() {
  document.getElementById("product-block1").style.display = "none";
}
function openForm2() {
  document.getElementById("product-block2").style.display = "block";
}
function closeForm2() {
  document.getElementById("product-block2").style.display = "none";
}
function openForm3() {
  document.getElementById("product-block3").style.display = "block";
}
function closeForm3() {
  document.getElementById("product-block3").style.display = "none";
}
function openForm4() {
  document.getElementById("product-block4").style.display = "block";
}
function closeForm4() {
  document.getElementById("product-block4").style.display = "none";
}
function openForm5() {
  document.getElementById("product-block5").style.display = "block";
}
function closeForm5() {
  document.getElementById("product-block5").style.display = "none";
}
function openForm6() {
  document.getElementById("product-block6").style.display = "block";
}
function closeForm6() {
  document.getElementById("product-block6").style.display = "none";
}
function openForm7() {
  document.getElementById("product-block7").style.display = "block";
}
function closeForm7() {
  document.getElementById("product-block7").style.display = "none";
}
function openForm8() {
  document.getElementById("product-block8").style.display = "block";
}
function closeForm8() {
  document.getElementById("product-block8").style.display = "none";
}
function openForm9() {
  document.getElementById("product-block9").style.display = "block";
}
function closeForm9() {
  document.getElementById("product-block9").style.display = "none";
}


function openForm10() {
  document.getElementById("id01").style.display = "none";
  document.getElementById("form2").style.display = "block";
}
function closeForm10() {
  document.getElementById("form2").style.display = "none";
}

/*انشاء حساب*/

const form = document.getElementById('form1');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password2');
const password2 = document.getElementById('checkpassword');



let is_form_checked = false;

form.addEventListener('submit', e => {
  if(!is_form_checked) {
    e.preventDefault();
    
    checkInputs();
    is_form_checked = true;
    
    //resubmit
  }
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }
  
  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }
  
  if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  
  if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
  } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else{
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control1 error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control1 success';
}
  
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
