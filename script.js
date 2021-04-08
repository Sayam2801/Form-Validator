const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Display Input Error Messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Validation of email
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email.value).toLowerCase());
    if(re.test(email.value.trim()))
       showSuccess(email);
    else
       showError(email, 'Invalid email');   
}

function getFieldName(input) 
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr)
{
    inputArr.forEach(function(input) {
        if(input.value.trim() === '')
           showError(input, `${getFieldName(input)} is required`);
        else  
           showSuccess(input); 
    });
}

function checkInputLength(input,min,max)
{
    if(input.value.length<min)
       showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    else if(input.value.length>max)
       showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    else 
       showSuccess(input);
}

function checkPasswordsMatch(input1,input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // if(username.value === '') 
    //    showError(username, 'Username is required');
    // else 
    //    showSuccess(username);

    // if(email.value === '') 
    //    showError(email, 'Email is required');
    // else if(!validateEmail(email)) 
    //    showError(email, 'Invalid email');
    // else 
    //    showSuccess(email);
    
    // if(password.value === '')
    //    showError(password, 'Password is required');
    // else 
    //    showSuccess(password);
    
    // if(password2.value === '')
    //    showError(password2, 'Confirmation of password is required');
    // else   
    //    showSuccess(password2);

    checkRequired([username, email, password, password2]);
    checkInputLength(username,3,15);
    checkInputLength(password,6,25);
    validateEmail(email);
    checkPasswordsMatch(password,password2);
});