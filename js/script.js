
//this calculator will display the total price of a signpost based on the number of tiles used (one tile per letter)

//calculating price - 
var signage = "Crunchies";
var tileNum = signage.length;
var tilePrice = 100;
var total = tileNum * tilePrice;
console.log(total);

//adding shipping costs
var shipping = 500;
var subTotal = total + shipping;
console.log(subTotal)

//Displaying results on the site
var hello = document.getElementById("greeting");
hello.textContent = "Hello " + signage + "!";


var userSign = document.getElementById("userSign");
userSign.textContent = signage;

var tiles = document.getElementById("tiles");
tiles.textContent = tileNum;

var price = document.getElementById("subTotal");
price.textContent =  "N " + total;

var shipCost= document.getElementById("shipping");
shipCost.textContent =  "N " + shipping;

var finalPrice = document.getElementById("grandTotal");
finalPrice.textContent =  "N " + subTotal;
