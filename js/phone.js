const btnPlusPhone = document.getElementById('btn-phone-plus');
const btnMinusPhone = document.getElementById('btn-phone-minus');

function taxAmountTotal(itemTotal) {
    const taxAmountElement = document.getElementById('tax');
    const taxAmountDecimal = itemTotal * 0.1;
    const texAmount = taxAmountDecimal.toFixed(2)
    taxAmountElement.innerText = texAmount;
}


//event listeners
btnPlusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(true, 'input-field-phone');
    totalPhonePrice(lastPhoneNumber);
    const itemTotal = calculateTotal();
    taxAmountTotal(itemTotal);
})

btnMinusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(false, 'input-field-phone');
    totalPhonePrice(lastPhoneNumber);
    const itemTotal = calculateTotal();
    taxAmountTotal(itemTotal);
})

