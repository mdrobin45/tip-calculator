function getInputValue(inputId) {
    const value = document.getElementById(inputId).value;
    const toNumberValue = Number(value);
    return toNumberValue;
}
document.getElementById('keyPad').addEventListener('click', function (event) {
    const billed = getInputValue('billedAmount');
    const person = getInputValue('numberOfPerson');
    const tip = event.target.value;
    if (tip != undefined && isNaN(tip) == true) {
        const toNumber = parseFloat(tip);
        const percent = toNumber / 100;
        const percentAmount = percent * billed;
        const billedWithPercent = billed + percentAmount;
        const tipPerPerson = percentAmount / person;
        const PerPersonAmount = billedWithPercent / person;
        const tipAmountPerPerson = document.getElementById('tipAmount');
        tipAmountPerPerson.innerText = tipPerPerson.toFixed(2);
        const totalAmountPerPerson = document.getElementById('totalAmount');
        totalAmountPerPerson.innerText = PerPersonAmount.toFixed(2);
    }
});
document.getElementById('resetBtn').addEventListener('click',function(){
    const tipAmountPerPerson = document.getElementById('tipAmount');
    const totalAmountPerPerson = document.getElementById('totalAmount');
    tipAmountPerPerson.innerText = '0.00';
    totalAmountPerPerson.innerText = '0.00';
})