var total = document.getElementById('total');
alert(total.innerHTML);

function MoneyTextToFloat(text) {
    var cleanText = text.replace("R$", "").replace(",", ".");
    return parseFloat(cleanText);
};

function floatToMoneyText(value) {
    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$" + text;
    return text.substr(0, text.length - 2) + "," + text.substr(-2);
};

function ReadTotal() {
    var total = document.getElementById('total');
    return moneyTextToFloat(total.innerHTML);
};

function writeTotal(value) {
    var total = document.getElementById('total');
    total.innerHTML = floatToMoneyText(value);
};