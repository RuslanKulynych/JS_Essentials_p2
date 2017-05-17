var e = 29.32;
var d = 26.43
var eur_to_dollars = 1.11;
var euros = prompt("enter the number of euro", "0 EUR");

function myFunctionE() {
    var eurToUah = euros * e;
    var message = euros + " euros are equal  " + eurToUah + "  gryvnas";
    alert(message);
}
myFunctionE();

var dollars = prompt('enter the number of dollars', "0 USD");

function myFunctionD() {
    var usdToUah = dollars * d;
    var message = dollars + " dollars are equal  " + usdToUah + "  gryvnas";
    alert(message);
}
myFunctionD();

var message = "one euro is equal " + eur_to_dollars + " dollars";
alert(message);