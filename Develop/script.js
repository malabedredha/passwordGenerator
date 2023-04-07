// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generatePassword() {
  if (confirm("Would you like your password to contain uppercase letters? "));
  {

  }

  let password = ""
  for (let i = 0; i < prompt("How long would you like your password to be"); i++) {

    password += "x";

  }


  return password;


}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
