const btnPlusPhone = document.getElementById('btn-phone-plus');
const btnMinusPhone = document.getElementById('btn-phone-minus');

btnPlusPhone.addEventListener('click', () => {
    updateProductNumber(true, 'input-field-phone');
})

btnMinusPhone.addEventListener('click', () => {
    updateProductNumber(false, 'input-field-phone');
})

