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


//-----> tab switch
assistantTab.addEventListener('click', function(){
    dashboard.classList.remove('hidden');
    historySection.classList.add('hidden');

    // add class list to style on history tab button
    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // remove history tab button style 
    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
});


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
    
    if(incomeInputBox.value === '' || softwareInputBox.value === '' || coursesInputBox.value === '' || internetInputBox.value === '') return;

    // calculate each one input values
    const totalExpenses = inputValues.softwareValue + inputValues.coursesValue + inputValues.internetValue;
    globalBalance = inputValues.incomeValue - totalExpenses;

    if(totalExpenses > inputValues.incomeValue){
        logicErrorMsg.classList.remove('hidden');
        // restart the page again to add new values again
        incomeInputBox.value = '';
        softwareInputBox.value = '';
        coursesInputBox.value = '';
        internetInputBox.value = '';
        return;
    }

    logicErrorMsg.classList.add('hidden');
    // show on results history
    totalExpensesBtn.textContent = totalExpenses.toFixed(2);
    totalBalanceBtn.textContent = globalBalance.toFixed(2);

    // show on history on history tab
    const historyItems = document.createElement('div');
    // div style
    historyItems.className = 'bg-white p-4 rounded-md border-l-2 border-indigo-500';
    // history
    historyItems.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">income: $${inputValues.incomeValue.toFixed(2)}</p>
    <p class="text-xs text-gray-500">expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">balance: $${globalBalance.toFixed(2)}</p>
    `;
    
    // append to the history list of histroy section
    historyList.insertBefore(historyItems, historyList.firstChild);
});


//-----> add event listener on saving button
savingsCalculationBtn.addEventListener('click', function(){
    // call the input values function
    const inputValues = allinputBoxValues();

    if(incomeInputBox.value === '' || softwareInputBox.value === '' || coursesInputBox.value === '' || internetInputBox.value === '' || savingsInputBox.value === '') return;

    // calculate total savings ammout 
    const savingsAmount = (inputValues.savingsValue * globalBalance) / 100;
    totalSavingsAmountBtn.textContent = savingsAmount.toFixed(2);
    
  // get remining balance and update current balance 
    const updatedBalance = globalBalance - savingsAmount;
    remainingbalanceBtn.textContent = updatedBalance.toFixed(2);

    // restart the page again to add new values again
    incomeInputBox.value = '';
    softwareInputBox.value = '';
    coursesInputBox.value = '';
    internetInputBox.value = '';
    savingsInputBox.value = '';
});