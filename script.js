var characterLength = 128;
var choiceArr ='';

const specialChatrArr =['!','@','#','$','%','^','&','*','(',')','_','-','=','+'].join('');
const lowerCaseArr =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].join('');
const upperCaseArr =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].join('');
const numberArr =['0','1','2','3','4','5','6','7','8','9'].join('');
var passwordText = document.querySelector("#password");
var generateBTN = document.querySelector("#generate");

generateBTN.addEventListener("click", writePassword);

function writePassword() { 
  generatePassword();
};

function generatePassword() { 
  characterLength = prompt("How many characters do you want your password to be? (8 - 128 characters");
  if ( characterLength < 8 || characterLength > 128 ){
    alert("Character length has to be a number between 8 - 128 digits. Please try again.");
  };
  if (confirm("Would you like to use lowercase letters in your password?")) {
    choiceArr += lowerCaseArr;
  };
  if (confirm("Would you like to use uppercase letters in your password?")) {
    choiceArr += upperCaseArr;
  };

  if (confirm("Would you like to use special letters in your password?")) {
    choiceArr += specialChatrArr;
  };

  if (confirm("Would you like to use numbers in your password?")) {
    choiceArr += numberArr;
  };
  
  //Build a loop as many times as the number as characters the user enters "charcterlength"
  
  // I would generatePassword based on the promnpts
  var password = "";
  for ( i = 0; i < characterLength; i++); {
    var randomIndex = Math.floor(Math.random() * (choiceArr.length-1));
    password += choiceArr[randomIndex];
    
  }
  passwordText.value = password;
  return;
  
// For every loop pick a random character from the choice array

};
