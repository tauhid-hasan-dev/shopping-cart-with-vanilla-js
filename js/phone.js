const btnPlusPhone = document.getElementById('btn-phone-plus');
const btnMinusPhone = document.getElementById('btn-phone-minus');

btnPlusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(true, 'input-field-phone');
    const phoneTotalPrice = productAmount('phone-total', lastPhoneNumber);
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = 1218 + productTotalPrice;
})

btnMinusPhone.addEventListener('click', () => {
    const lastPhoneNumber = updateProductNumber(false, 'input-field-phone');
    const caseTotalPrice = productAmount('phone-total', lastPhoneNumber);

})

