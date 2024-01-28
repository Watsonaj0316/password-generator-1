var lowerCaseArr = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberArr = '0123456789';
var specialChatrArr = '!@#$%^&*()-_+=';
var characterLength;
var choiceArr = '';

var passwordText = document.querySelector("#password");
var generateBTN = document.querySelector("#generate");

generateBTN.addEventListener("click", writePassword);

function writePassword() {
  characterLength = prompt("How many characters do you want your password to be? (8 - 128 characters)");

  if (characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number between 8 - 128 digits. Please try again.");
    writePassword(); // Restart the function if the input is invalid
    return;
  }

  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr += lowerCaseArr;
  }
  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArr += upperCaseArr;
  }
  if (confirm("Would you like to use special characters in your password?")) {
    choiceArr += specialChatrArr;
  }
  if (confirm("Would you like to use numbers in your password?")) {
    choiceArr += numberArr;
  }

  if (choiceArr.length === 0) {
    alert("You must select at least one character type. Please try again.");
    writePassword(); // Restart the function if no character types are selected
    return;
  }

  var password = "";
  for (let i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password += choiceArr[randomIndex];
  }

  passwordText.value = password;
}
