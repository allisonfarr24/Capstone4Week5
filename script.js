var items = [
{item : "Eggs", price: 3.99},
{item : "Bread", price: 2.49},
{item : "Milk", price: 2.99},
{item : "Cheese", price: 3.29},
{item : "Coffee", price: 5.99},
{item : "Yogurt", price: 2.79},
{item: "Chips", price: 3.79}
];
var cart = [];

function addToCart(i) {
  //var addItem = document.getElementById("addItem").value;
  //cart.push(addItem[i])
  cart.push(items[i]);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  console.log("Your total is: " + total);

}

function displayCart() {
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i]);

}
getTotal();
}