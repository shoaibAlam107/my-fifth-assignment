

function getInputFieldValueById(id){
    
    const inputValue = parseFloat (document.getElementById(id).value);
    return inputValue;
    
}

function getTextFieldById(id){
    const textValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


