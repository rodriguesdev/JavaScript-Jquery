

$("p").css("background-color", "lightgreen");
$(".par").css("background-color", "lightblue");
$("#texto").css("color", "white").val("esse é o novo texto");

var produtos = $(".produto");

var primeiroProduto = produtos[0];
$(primeiroProduto).find(".quantity").val();

function writeTotal(value) {
    var text = floatToMoneyText(value);
    $("#total").text(text);
};

function calculateTotalProducts() {
    var produtos = $(".produto");
    var total = 0;
    $(produtos).each(function (pos, produto) {
        var $produto = $(produto);
        var quantity = moneyTextToFloat(
        $produto.find(".quantity").val());
        var price = moneyTextToFloat(
        $produto.find(".price").text());
        total += quantity * price;
    });
    return total;
};

$(document).ready(function(){
    $(".quantity").change(function () {
        writeTotal(calculateTotalProducts());
    });
}






//function MoneyTextToFloat(text) {
//    var cleanText = text.replace("R$", "").replace(",", ".");
//    return parseFloat(cleanText);
//};

//function floatToMoneyText(value) {
//    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
//    text = "R$" + text;
//    return text.substr(0, text.length - 2) + "," + text.substr(-2);
//};

//function ReadTotal() {
//    var total = document.getElementById('total');
//    return moneyTextToFloat(total.innerHTML);
//};

//function writeTotal(value) {
//    var total = document.getElementById('total');
//    total.innerHTML = floatToMoneyText(value);
//};

//function calculateTotalProducts() {
//    var produtos = document.getElementsByClassName("produto");
//    var totalProdutos = 0;
//    for (var pos = 0; pos < produtos.length; pos++) {
//        var priceElements = produtos[pos].
//        getElementsByClassName("price");
//        var priceText = priceElements[0].innerHTML;
//        var price = moneyTextToFloat(priceText);
//        var qtyElements = produtos[pos].
//        getElementsByClassName("quantity");
//        var qtyText = qtyElements[0].value;
//        var quantity = moneyTextToFloat(qtyText);
//        var subtotal = quantity * price;
//        totalProdutos += subtotal;
//        console.log(totalProdutos);
//    }
//    return totalProdutos;
//};

//function quantidadeMudou() {
//    writeTotal(calculateTotalProducts());
//};

//function OnDocumentLoad() {
//    var textEdit = document.getElementsByClassName('quantity');

//    for (var i = 0; i < textEdit.length; i++) {
//        textEdit[i].onchange = quantidadeMudou;
//    }
//}



//window.onload = onDocumentLoad;

