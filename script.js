const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show input error messege
function showError(input, messege){
  const formcontrol = input.parentElement;
  formcontrol.className= 'form-control error';
  const small = formcontrol.querySelector('small');
  small.innerText = messege;
}

//show input succes color
function showSucces(input){
  const formcontrol = input.parentElement;
  formcontrol.className= 'form-control succes';
}


//check email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value)){
    showSucces(input);
  }else{
    showError(input, 'email is not valid');
  }
}

//get fieldname
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//checklength
function checkLength(input, min , max){
  if(input.value.length < min){
    showError(input ,`${getFieldName(input)} muste be at least ${min} characters`);
  }else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} muste be at less than ${max} characters`);
  }else{
    showSucces(input);
  }
}

//check required
function checkrequired(inputArr){
  inputArr.forEach(function(input){
    if (input.value.trim()==='') {
      showError(input, `${getFieldName(input)} is required`);
    }else{
      showSucces(input);
    }
  });
}

//checkPassword
function checkPasswords(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, 'passwords do not match')
  }
}


//event listener
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkrequired([username, email , password , password2]);
  checkLength(username, 3, 15);
  checkLength(password,5, 25);
  checkEmail(email);
  checkPasswords(password, password2);
})
