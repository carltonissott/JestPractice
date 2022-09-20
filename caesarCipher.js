function caeserSipher(string, position){
    const array = string.split("")
    const newArray = []
    array.forEach(element => {
        if (element.charCodeAt() > 64 && element.charCodeAt() < 91){
            if ((element.charCodeAt() + position)>90){
                newArray.push(String.fromCharCode(64 + (position - (90-(element.charCodeAt())))))
            } else if ((element.charCodeAt() - position)<65){
                newArray.push(String.fromCharCode(91 - (position - (65-(element.charCodeAt())))))
            } else {newArray.push(String.fromCharCode(element.charCodeAt()+position))}
        }
        else if(element.charCodeAt() > 96 && element.charCodeAt() < 123){
            if ((element.charCodeAt() + position)>122){
                newArray.push(String.fromCharCode(96 + (position - (122-(element.charCodeAt())))))
            } else if ((element.charCodeAt() + position)<97){
                newArray.push(String.fromCharCode(123 - (position - (97-(element.charCodeAt())))))
            }
            else {newArray.push(String.fromCharCode(element.charCodeAt()+position))}
        } else {
            newArray.push(element)
        }
    });

    return newArray.join("")
}

module.exports = caeserSipher