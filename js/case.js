function inputFieldValueById(inputId) {
    const inputField = document.getElementById('case-number-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);

    let newCaseNumber;

    if (inputId === true) {
        newCaseNumber = inputFieldValue + 1;
    }
    else {
        newCaseNumber = inputFieldValue - 1;
    }
    inputField.value = newCaseNumber;
    return newCaseNumber;
}

function setFinalCasePrice(caseNumber) {
    const caseTotalPrice = caseNumber * 59;
    const caseTotalElement = document.getElementById('case-total-price');
    caseTotalElement.innerText = caseTotalPrice;
}






document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = inputFieldValueById(true);
    setFinalCasePrice(newCaseNumber);

    calculateSubTotal();
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = inputFieldValueById(false);
    setFinalCasePrice(newCaseNumber);

    calculateSubTotal();
})