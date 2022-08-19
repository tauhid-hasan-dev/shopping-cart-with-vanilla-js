const btnPlusCase = document.getElementById('btn-case-plus');
const btnMinusCase = document.getElementById('btn-case-minus');

btnPlusCase.addEventListener('click', () => {
    const lastCaseNumber = updateProductNumber(true, 'input-field-case');
    totalCasePrice(lastCaseNumber);
    const subTotalAmount = calculateSubTotal();
    const taxAmount = taxAmountTotal(subTotalAmount);
    finalTotalAmount(taxAmount, subTotalAmount);
});

btnMinusCase.addEventListener('click', () => {
    const lastCaseNumber = updateProductNumber(false, 'input-field-case');
    totalCasePrice(lastCaseNumber);
    const subTotalAmount = calculateSubTotal();
    const taxAmount = taxAmountTotal(subTotalAmount);
    finalTotalAmount(taxAmount, subTotalAmount);
});