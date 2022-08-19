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

function productAmount(inputId, lastProductNumber) {
    const productTotal = document.getElementById(inputId);
    if (inputId === 'phone-total') {
        productTotal.innerText = lastProductNumber * 1219;
    } else if (inputId === 'case-total') {
        productTotal.innerText = lastProductNumber * 59;
    }
    let productPrice = productTotal.innerText;
    let productPriceTotal = parseFloat(productPrice);
    return productPriceTotal;
}



