"use strict"

//Input range 
let rangeInputValue = document.getElementById("range");
let rangeNumberOutput = document.getElementById("rangeNumber");

//Checkboxs
let lowerCaseCheckBox = document.getElementById("lowercase");
let upperCaseCheckBox = document.getElementById("uppercase");
let symbolCheckBox = document.getElementById("symbol");
let numberCheckBox = document.getElementById("number");

//Arrays
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "%", "&", "*", "(", ")"];

//receiving the illiterate  
const character = Array.from(Array(26)).map((_, i) => i + 97);

//Filtering into upper and lower case characters
const lowerCaseCharacter = character.map((item) => String.fromCharCode(item));
const upperCaseCharacter = lowerCaseCharacter.map((item) => item.toUpperCase());

//Changing the number of range input output
rangeNumberOutput.innerHTML = rangeInputValue.value;

/* RangeInputValue will change the number of output according you slide the input range
rangeNumberOutput will change with value of rangeInputValue */
rangeInputValue.addEventListener("change", () => {

    rangeNumberOutput.innerHTML = rangeInputValue.value;

});

//click event to check the checkboxes
document.getElementById("generate").addEventListener("click", () => {

    generatePassword(
        lowerCaseCheckBox.checked,
        upperCaseCheckBox.checked,
        symbolCheckBox.checked,
        numberCheckBox.checked,
        rangeInputValue.value
    )

});

//
const generatePassword = (hasLowerCase, hasUpperCase, hasSymbol, hasNumber, length) => {

    const newObject = {
        ...(hasLowerCase ? lowerCaseCharacter : []),
        ...(hasUpperCase ? upperCaseCharacter : []),
        ...(hasSymbol ? symbols : []),
        ...(hasNumber ? numbers : [])
    };

    if (newObject === 0) {

        return;

    }

    let password = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * newObject.length);
        password += newObject[randomIndex];
    };

    document.getElementById("generatedPassword").innerHTML = `${password}`

    console.log(randomIndex)

}