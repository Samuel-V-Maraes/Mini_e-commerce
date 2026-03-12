// pegar carrinho salvo

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// adicionar produto

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Produto adicionado!");

}