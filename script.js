let globalBalance;

// get assistant tab and history tab
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');


//------> form section (dashboard)
const dashboard = document.getElementById('expense-form');

// income input box
const incomeInputBox = document.getElementById('income');

// software input box
const softwareInputBox = document.getElementById('software');

// courses input box
const coursesInputBox = document.getElementById('courses');

// internet input box
const internetInputBox = document.getElementById('internet');

// savings" input box
const savingsInputBox = document.getElementById('savings');


// error massages
const incomeErrorMsg = document.getElementById('income-error');
const softwareErrorMsg = document.getElementById('software-error');
const coursesErrorMsg = document.getElementById('courses-error');
const internetErrorMsg = document.getElementById('internet-error');
const savingsErrorMsg = document.getElementById('savings-error');
const logicErrorMsg = document.getElementById('logic-error');


// calculation buttons
const totalCalculationBtn = document.getElementById('calculate');
const savingsCalculationBtn = document.getElementById('calculate-savings');


// history section
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');


// results section 
const resultsSection = document.getElementById('results');
const totalExpensesBtn = document.getElementById('total-expenses');
const totalBalanceBtn = document.getElementById('balance');
const totalSavingsAmountBtn = document.getElementById('savings-amount');
const remainingbalanceBtn = document.getElementById('remaining-balance');


//-----> each one input values
function allinputBoxValues(){
    // get all input box values
    const incomeValue = parseFloat(incomeInputBox.value);
    const softwareValue = parseFloat(softwareInputBox.value);
    const coursesValue = parseFloat(coursesInputBox.value);
    const internetValue = parseFloat(internetInputBox.value);
    const savingsValue = parseFloat(savingsInputBox.value); 

    return {incomeValue, softwareValue, coursesValue, internetValue, savingsValue};
}


//-----> add event listener on total calculation button to calculate each one input values.
totalCalculationBtn.addEventListener('click', function(){
    // call the input values function
    const inputValues = allinputBoxValues();

    // input box validation [from validation.js file]
    function inputValidation(inputValue, errorMsg, parseValue){
    if(inputValue === ''){
        errorMsg.style.display = 'none';
    }else if (isNaN(inputValue) || parseValue <= 0) {
        errorMsg.style.display = 'block';
    }else {
        // calculate each one input values
        const totalExpenses = inputValues.softwareValue + inputValues.coursesValue + inputValues.internetValue;
        globalBalance = inputValues.incomeValue - totalExpenses;

        // show on results history
        totalExpensesBtn.textContent = totalExpenses.toFixed(2);
        totalBalanceBtn.textContent = globalBalance.toFixed(2);
    }
}
})




