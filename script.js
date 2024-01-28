// Assignment Code
var characterLength = 128;
var choiceArr =[];

var specialChatrArr =['!','@','#','$','%','^','&','*','(',')','_','-','=','+'];
var loserCaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr =['0','1','2','3','4','5','6','7','8','9'];

var generateBTN = document.querySelector("#generate");

generateBTN.addEventListener("click", writePassword);

function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() { 
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));
  if (characterLength < 8 ||characterLength > 128 ){
    alert("Character length has to be a number between 8 - 128 digits. Please try again.");
  return false;
  }
  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(loserCaseArr);
  }

  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (confirm("Would you like to use special letters in your password?")) {
    choiceArr = choiceArr.concat(specialChatrArr);
  }

  if (confirm("Would you like to use numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  
  }
  
  //Build a loop as many times as the number as characters the user enters "charcterlength"
  
  // I would generatePassword based on the promnpts
  var password = "";
  for (var i = 8; i < characterLength; i++); {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
    
  }
  return password;
  
// For every loop pick a random character from the choice array

}
console.log(password);
