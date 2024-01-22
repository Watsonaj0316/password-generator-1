// Assignment Code
function generatePassword(){}

const passwordLength = prompt("Enter a password length between 8 and 128");
console.log(passwordLength);
char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
num = "0123456789";
sym = "!@$%^&*()-_+=";



if (window.confirm("Contain a special character")) {
  window.open("special character", "Thanks for selecting!");
}

if (window.confirm("Contain uppercase and lowercase characters")) {
  window.open("upper and lowercase characters", "Thanks for selecting!");
}

if (window.confirm("Contain a numeric character")) {
  window.open("numeric character", "Thanks for selecting!");

}

function generatePassword(length){
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*()-_+=';
let password = '';
for (let i = 0; i < length; i++) {
const randomINDEX = Math.floor(Math.random() * charset.length);
password += charset[randomINDEX];
}

  return password;
}

// Write password to the #password input
function updatePassword(){
  const passwordLength = 8;
  const password = generatePassword(passwordLength);
   document.getElementById('password').textContent = password;

}

// Add event listener to generate button
document.getElementById('password').addEventListener("click", updatePassword);
