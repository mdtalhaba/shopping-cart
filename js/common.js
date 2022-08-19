function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementIdFinal, value) {
    const subTotalElement = document.getElementById(elementIdFinal);
    subTotalElement.innerText = value;
}


function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total-price');
    const currentCaseTotal = getTextElementValueById('case-total-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = (currentSubTotal + taxAmount);
    setTextElementValueById('final-total', finalAmount);
}
