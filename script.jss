let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert(name + " added to cart");

}

if(document.getElementById("cartItems")){

let cartDiv = document.getElementById("cartItems");

let total = 0;

cart.forEach(item=>{
cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
total += item.price;
});

document.getElementById("total").innerText="Total: ₹"+total;

}

function checkout(){

alert("Order placed successfully 🚀");

localStorage.removeItem("cart");

location.reload();

}
