const btnPlusCase = document.getElementById('btn-case-plus');
const btnMinusCase = document.getElementById('btn-case-minus');

btnPlusCase.addEventListener('click', () => {
    updateProductNumber(true, 'input-field-case');
})

btnMinusCase.addEventListener('click', () => {
    updateProductNumber(false, 'input-field-case');
})