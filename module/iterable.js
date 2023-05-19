const changeVocal = (toChar, sentence) => {
    "use strict";
    let result = [];
    let sentenceToLower = sentence.toLowerCase()
    for (let x of sentenceToLower) {
        if (x === 'a' || x === 'i' || x === 'u' || x === 'e' || x === 'o') {
            x = toChar;
        }
        result.push(x);
    }
    return result;
}

export default changeVocal;