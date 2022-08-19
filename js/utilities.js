//adding and deleting items from shopping cart
function updateProductNumber(isIncrease, inputId) {
    const inputFieldProduct = document.getElementById(inputId);
    const inputFieldString = inputFieldProduct.value;
    const inputFieldValue = parseInt(inputFieldString);
    if (isIncrease) {
        inputFieldProduct.value = inputFieldValue + 1;
    } else {
        inputFieldProduct.value = inputFieldValue - 1;
    }
    let newNumber = inputFieldProduct.value;
    return newNumber;
}

//calculating total phone price 
function totalPhonePrice(lastPhoneNumber) {
    const phoneTotalPrice = lastPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneTotalPrice;
}

//calculating total case price
function totalCasePrice(lastCaseNumber) {
    const caseTotalPrice = lastCaseNumber * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseTotalPrice;
}

//finding product total price
function getPhoneTotalPriceById(elemId) {
    const productTotalElement = document.getElementById(elemId);
    const productTotalString = productTotalElement.innerText
    const productTotalPrice = parseFloat(productTotalString);
    return productTotalPrice;
}

//calculate subtotal amount
function calculateSubTotal() {
    const currentPhoneTotalPrice = getPhoneTotalPriceById('phone-total');
    const currentCaseTotal = getPhoneTotalPriceById('case-total');
    const subTotalPrice = currentPhoneTotalPrice + currentCaseTotal;
    const currentSubTotal = document.getElementById('sub-total');
    currentSubTotal.innerText = subTotalPrice;
    return subTotalPrice;
}

//tax amount total calculation
function taxAmountTotal(itemTotal) {
    const taxAmountElement = document.getElementById('tax');
    const taxAmountDecimal = itemTotal * 0.1;
    const taxAmountString = taxAmountDecimal.toFixed(2)
    const taxAmount = parseFloat(taxAmountString);
    taxAmountElement.innerText = taxAmount;
    return taxAmount;
}








