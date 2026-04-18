// get assistant tab and history tab
const assistantTab = document.getElementById('assistant-tab');
const historyTab = document.getElementById('history-tab');


//------> form section (dashboard)
const dashboard = document.getElementById('expense-form');

// income input box
const incomeInputBox = document.getElementById('income');
const incomeTextValue = parseFloat(incomeInputBox.value);

// software input box
const softwareInputBox = document.getElementById('software');
const softwareTextValue = parseFloat(software.value);

// courses input box
const coursesInputBox = document.getElementById('courses');
const coursesTextValue = parseFloat(courses.value);

// internet input box
const internetInputBox = document.getElementById('internet');
const coursesTextValue = parseFloat(internet.value);

// savings" input box
const savingsInputBox = document.getElementById('savings');
const savingsTextValue = parseFloat(savings.value);


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
const totalExpenses = document.getElementById('total-expenses');
const totalBalance = document.getElementById('balance');
const totalSavingsAmount = document.getElementById('savings-amount');
const remainingbalance = document.getElementById('remaining-balance');
