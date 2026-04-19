// //-----> income input box validation
// incomeInputBox.addEventListener('input', function () {
//     const value = allinputBoxValues();
//     const incomeInputValue = incomeInputBox.value;

//     if(incomeInputValue === ''){
//         incomeErrorMsg.style.display = 'none';
//     }else if (isNaN(incomeInputValue) || value.incomeValue <= 0) {
//         incomeErrorMsg.style.display = 'block';
//     }else {
//         incomeErrorMsg.style.display = 'none';
//     }
// });

// //-----> software input box validation
// softwareInputBox.addEventListener('input', function () {
//     const value = allinputBoxValues();
//     const softwareInputValue = softwareInputBox.value;

//     if(softwareInputValue === ''){
//         softwareErrorMsg.style.display = 'none';
//     }else if (isNaN(softwareInputValue) || value.softwareValue <= 0) {
//         softwareErrorMsg.style.display = 'block';
//     }else {
//         softwareErrorMsg.style.display = 'none';
//     }
// });


// //-----> courses input box validation
// coursesInputBox.addEventListener('input', function () {
//     const value = allinputBoxValues();
//     const coursesInputValue = coursesInputBox.value;

//     if(coursesInputValue === ''){
//         coursesErrorMsg.style.display = 'none';
//     }else if (isNaN(coursesInputValue) || value.coursesValue <= 0) {
//         coursesErrorMsg.style.display = 'block';
//     }else {
//         coursesErrorMsg.style.display = 'none';
//     }
// });


// //-----> internet input box validation
// internetInputBox.addEventListener('input', function () {
//     const value = allinputBoxValues();
//     const internetInputValue = internetInputBox.value;

//     if(internetInputValue === ''){
//         internetErrorMsg.style.display = 'none';
//     }else if (isNaN(internetInputValue) || value.internetValue <= 0) {
//         internetErrorMsg.style.display = 'block';
//     }else {
//         internetErrorMsg.style.display = 'none';
//     }
// });


// input box validation
function inputValidation(inputValue, errorMsg, parseFloat){
    if(inputValue === ''){
        errorMsg.style.display = 'none';
    }else if (isNaN(inputValue) || parseFloat <= 0) {
        errorMsg.style.display = 'block';
    }else {
        errorMsg.style.display = 'none';
    }
}

incomeInputBox.addEventListener('input', function(){
    const value = allinputBoxValues();
    inputValidation(incomeInputBox.value, incomeErrorMsg, value.incomeValue);
});

softwareInputBox.addEventListener('input', function(){
    const value = allinputBoxValues();
    inputValidation(softwareInputBox.value, softwareErrorMsg, value.softwareValue);
});

coursesInputBox.addEventListener('input', function(){
    const value = allinputBoxValues();
    inputValidation(coursesInputBox.value, coursesErrorMsg, value.coursesValue);
});

internetInputBox.addEventListener('input', function(){
    const value = allinputBoxValues();
    inputValidation(internetInputBox.value, internetErrorMsg, value.internetValue);
})

