//--------------------- iphone and Phone-Case handle event ---------------------//

function button(quantityAmount, isHigh, values, price) {

    const quantity = document.getElementById(quantityAmount);
    const phoneQuantityText = quantity.value;
    const phoneQuantityValue = parseInt(phoneQuantityText);

    if (isHigh == true) {
        quantity.value = phoneQuantityValue + 1;
    }
    else if (isHigh == false && phoneQuantityValue > 0) {
        quantity.value = phoneQuantityValue - 1;
    }

    const value = document.getElementById(values);
    value.innerText = price * (quantity.value);


    //console.log(phoneValue);
    calculate();

}

function calculate() {

    const phoneValue = document.getElementById("phone-value");
    const phoneValueFinal = parseInt(phoneValue.innerText);

    const caseValue = document.getElementById("case-value");
    const caseValueFinal = parseInt(caseValue.innerText);

    // subtotal calculation 
    const subTotal = phoneValueFinal + caseValueFinal;

    // show subtotal price
    const subtotalPrice = document.getElementById("sub-total")
    subtotalPrice.innerText = subTotal;

    // tax calculation (12%)
    const taxTotal = document.getElementById("tax-total");
    const taxPrice = parseInt(subTotal / 12);
    taxTotal.innerText = taxPrice;

    // total price calculation
    const price = document.getElementById("price-total");
    price.innerText = subTotal + taxPrice;

    //console.log(subTotal);

}


//------------------ iphone events used and called ---------------------//

document.getElementById("phone-plus").addEventListener('click', function () {
    button("phone-quantity", true, "phone-value", 1219);
});
document.getElementById("phone-minus").addEventListener('click', function () {
    button("phone-quantity", false, "phone-value", 1219);
});


//----------------- phone-Case events used and called ------------------//

document.getElementById("case-plus").addEventListener('click', function () {
    button("case-quantity", true, "case-value", 59);
});
document.getElementById("case-minus").addEventListener('click', function () {
    button("case-quantity", false, "case-value", 59);
});