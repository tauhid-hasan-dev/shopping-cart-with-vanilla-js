function updateProductNumber(isIncrese, inputId) {
    const inputFieldProduct = document.getElementById(inputId);
    const inputFieldString = inputFieldProduct.value;
    const inputFieldValue = parseInt(inputFieldString);
    if (isIncrese) {
        inputFieldProduct.value = inputFieldValue + 1;
    } else {
        inputFieldProduct.value = inputFieldValue - 1;
    }
}