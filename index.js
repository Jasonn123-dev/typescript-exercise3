"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charChange = void 0;
const string = "1";
console.log(String.fromCharCode(string.charCodeAt(string.length - 1) + 1));
const charChange = (data) => {
    let letter = "";
    let changeLetter = "";
    let number = "0123456789";
    let vowels = "aeiou";
    let consonant = "bcdfghjklmnpqrstvwxyz";
    data = data.toLocaleLowerCase();
    for (let i = 0; i < data.length; i++) {
        letter = data.substring(i, i + 1);
        if (number.includes(letter)) {
            changeLetter += letter;
        }
        else if (letter === 'z') {
            changeLetter += "A";
        }
        else {
            let tempLetter;
            tempLetter = String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
            if (vowels.includes(tempLetter)) {
                tempLetter = tempLetter.toLocaleUpperCase();
                changeLetter += tempLetter;
            }
            else {
                tempLetter.toLocaleLowerCase();
                changeLetter += tempLetter;
            }
        }
    }
    console.log(changeLetter);
};
exports.charChange = charChange;
(0, exports.charChange)("Cat30");
