function showAndHide() {    
    if (document.getElementById('add-contact-box').style.display == 'none') {
        document.getElementById('add-contact-box').style.display = 'block'; 
        document.getElementById('contact-table').style.display = 'none'; 
        document.getElementById('box').style.display = 'none'; 
        document.getElementById('title').style.display = 'none'; 
        document.getElementById('data-box-1').style.display = 'none'; 
        document.getElementById('data-box-2').style.display = 'none'; 
        document.getElementById('data-box-3').style.display = 'none'; 
        document.getElementById('data-box-4').style.display = 'none'; 
    }
    else 
    {
        document.getElementById('add-contact-box').style.display = 'none'; 
        document.getElementById('contact-table').style.display = 'block'; 
        document.getElementById('box').style.display = 'block'; 
        document.getElementById('title').style.display = 'block'; 
        document.getElementById('data-box-1').style.display = 'block'; 
        document.getElementById('data-box-2').style.display = 'block'; 
        document.getElementById('data-box-3').style.display = 'block'; 
        document.getElementById('data-box-4').style.display = 'block'; 
    }                      
}

function setNumUsers(num){
    numUsers = num;
}

function incNumUser(){
    numUsers++;
}

function decNumUser(){
    numUsers--;
}

function numOfUsers(){
    return numUsers;
}
// document.getElementById("numOfUsers").innerHTML( numOfUsers() );

// Shows the password requirements to the user when password field is clicked on
function showRequirements() 
{
	document.getElementById('password-requirements-title').style.display = "grid"; 
}

// Hides  the password requirements to the user when password field is clicked on
function hideRequirements() 
{
	document.getElementById('password-requirements-title').style.display = "hidden"; 
}

const characters = document.querySelector('#num-characters'); 
const lowercase = document.querySelector('#num-lowercase'); 
const uppercase = document.querySelector('#num-uppercase'); 
const digits = document.querySelector('#num-digits'); 
const special = document.querySelector('#num-special'); 

// Displays to the user what password requirements they have met
function checkRequirements() 
{
    let numLowercase = 0; 
    let numUppercase = 0; 
    let numDigits = 0
    let numSpecial = 0;  
    let string = document.getElementById('registerPassword1').value;   
    let length = string.length; 
    let i = 0; 

    // Has 8 to 20 characters 
    if (length >= 8 && length <= 20)
    {
        characters.textContent = "✔ 8 to 20 characters";
        characters.style.color = 'green';  
    }
    // Doesn't have 8 to 20 characters 
    else if (length < 8 || length > 20)
    {
        characters.textContent = "✗ 8 to 20 characters"; 
        characters.style.color = '#bc1823'; 
    }

    /* Needs some fixing */ 

    while (i < length)
    {
        let current = string.charAt(i); 

        let ascii = current.charCodeAt(0); 

        if (ascii >= 97 && ascii <= 122)
        {
            numLowercase++; 

            // Has at least one lowercase letter 
            if (numLowercase >= 1)
            {
                lowercase.textContent = "✔ At least one lowercase letter";
                lowercase.style.color = 'green';  
            }

            // Has no lowercase letters 
            else if (numLowercase < 1)
            {

                lowercase.textContent = "✗ At least one lowercase letter"; 
                lowercase.style.color = '#bc1823'; 
            }
        }

        else if (ascii >= 65 && ascii <= 90)
        {
            numUppercase++; 

            // Has at least one uppercase letter 
            if (numUppercase >= 1)
            {
                uppercase.textContent = "✔ At least one uppercase letter"; 
                uppercase.style.color = 'green';  
            }
            // Has no uppercase letters
            else if (numUppercase < 1)
            {
                uppercase.textContent = "✗ At least one uppercase letter"; 
                uppercase.style.color = '#bc1823'; 
            }
        }

        else if (current >= '0' || current <= '9')
        {
            numDigits++; 

            // Has at least one number 
            if (numDigits >= 1)
            {
                digits.textContent = "✔ At least one number"; 
                digits.style.color = 'green';  
            }
            // Has no numbers 
            else if (numDigits < 1)
            {
                digits.textContent = "✗ At least one lowercase number"; 
                digits.style.color = '#bc1823'; 
            }
        }

        else if (current == '!' || current == '@' || current == '#' || current == '$' || current == '%' || current == '&' || current == "?")
        {
            numSpecial++; 

            // Has at least one special character 
            if (numSpecial >= 1)
            {
                special.textContent = "✔ At least one special character";
                special.style.color = 'green';  
            }
            // Has no special characters 
            else if (numSpecial < 1)
            {
                special.textContent = "✗ At least one special character"; 
                special.style.color = '#bc1823'; 
            }
        }

        i++; 
    }
}
    