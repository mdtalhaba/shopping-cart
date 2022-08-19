
function phoneFieldValueById(phoneId) {
    const phoneField = document.getElementById('phone-number-field');
    const phoneFieldValueString = phoneField.value;
    const phoneFieldValue = parseInt(phoneFieldValueString);

    let newPhoneNumber;

    if (phoneId === true) {
        newPhoneNumber = phoneFieldValue + 1;
    }
    else {
        newPhoneNumber = phoneFieldValue - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}

function setFinalPhonePrice(phoneNumber) {
    const phoneTotalPrice = phoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}





document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = phoneFieldValueById(true);
    setFinalPhonePrice(newPhoneNumber);

    calculateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = phoneFieldValueById(false);
    setFinalPhonePrice(newPhoneNumber);

    calculateSubTotal();
})