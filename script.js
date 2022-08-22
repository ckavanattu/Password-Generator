var passwordBtn = document.querySelector("#generate")
var passwordText= document.querySelector("#password")
var upperCaseCharCode = generateCharCodes(65, 90)
var lowerCaseCharCode = generateCharCodes(97, 122)
var numberCharCode = generateCharCodes(48, 57)
var specialCharCode = generateCharCodes(33, 47)

function generateCharCodes(low, high) {
    var array = [ ]

    for (i=low; i<=high; i++) {
        array.push(i)
    }
    return array

}



var passwordDetails = function() {

  var passwordLength=prompt("How long would you like the password to be? Please enter a number") 
  
  if (passwordLength < 8) {
    alert ("Password must be greater than 8 characters")
    passwordDetails();
    return false
     
    
    
  }
  
  else if (passwordLength > 128) {
    alert ("Password must be less than 128 characters ")
    passwordDetails();
    return false
  }
  
  alert("please choose from the following parameters!")
  
  var includeUpperCase = confirm("Would you like to include UpperCase characters?")
  
  if(includeUpperCase){
      var passwordUpperCase = 1
  }
  else{
      var passwordUpperCase = 0
  }
  
  var includeLowerCase = confirm("Would You like to include LowerCase characters?")
  
  if(includeLowerCase){
      var passwordLowerCase = 1
  }
  else{
      var passwordLowerCase= 0
  }
  
  
  var includeSpecialChar = confirm("Would you like to include special characters")
  
  if(includeSpecialChar){
      passwordSpecialCharacter = 1
  }
  else{
      passwordSpecialCharacter = 0
  }
  
  var includeNumber = confirm("Would you like to include a number?")
  
  if (includeNumber){
      passwordNumber = 1
  }
  else{
      passwordNumber = 0
  } 
  
  var checkInputs = parseInt(passwordUpperCase)+parseInt(passwordLowerCase)+parseInt(passwordSpecialCharacter)+parseInt(passwordNumber)
  
  if(checkInputs === 0){
      alert("please select at least one password parameter")
      passwordDetails();
  }
  else{
  
  generatePassword(passwordLength, passwordUpperCase, passwordLowerCase, passwordSpecialCharacter,passwordNumber);
  }
  
  }