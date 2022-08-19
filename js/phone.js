const btnPlusPhone = document.getElementById('btn-phone-plus');
const btnMinusPhone = document.getElementById('btn-phone-minus');


function finalTotalAmount(taxAmount, subTotalAmount) {
    const totalAmount = subTotalAmount + taxAmount;
    const totalElement = document.getElementById('total');
    totalElement.innerText = totalAmount;
}

//event listeners
btnPlusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(true, 'input-field-phone');
    totalPhonePrice(lastPhoneNumber);
    const subTotalAmount = calculateSubTotal();
    const taxAmount = taxAmountTotal(subTotalAmount);
    finalTotalAmount(taxAmount, subTotalAmount);

})

btnMinusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(false, 'input-field-phone');
    totalPhonePrice(lastPhoneNumber);
    const subTotalAmount = calculateSubTotal();
    const taxAmount = taxAmountTotal(subTotalAmount);
    finalTotalAmount(taxAmount, subTotalAmount);
})

