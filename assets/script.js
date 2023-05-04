// This creates the button the user clicks to generate a password
var generateBtn = document.querySelector("#generate");


// These are arrays for uppercase letters, lowercase letters, numbers and special characters
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '\'', '\"', '<', '>', ',', '.', '?', '/', '`', '~'];



// This function asks the user to confirm if they want the options of letters and numbers and special characters in there password
function generatePassword() {
  let builtArray = []
  if (confirm("Would you like your password to contain uppercase letters?")) {
    builtArray = [...builtArray, ...upperAlphabet];
  }

  if (confirm("Would you like your password to contain lowercase letters?")) {
    builtArray = [...builtArray, ...lowerAlphabet];
  }

  if (confirm("Would you like your password to contain numbers?")) {
    builtArray = [...builtArray, ...numbers];
  }

  if (confirm("Would you like your password to contain special characters?")) {
    builtArray = [...builtArray, ...specialCharacters]
  }

  let password = "";

  let passwordLength = prompt("Password length? (Must be between 8-128 characters)")
  if (passwordLength < 8) {
    alert("Must be greater than 8")
    return
  }
  if (passwordLength > 128) {
    alert("Must be less than 128")
    return
  }

  for (let i = 0; i < passwordLength; i++) {

    let generatedLetterIndex = Math.floor(Math.random() * builtArray.length);
    password += builtArray[generatedLetterIndex]

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