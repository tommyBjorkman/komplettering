"use strict";

const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

let product;
let url = 'https://fakestoreapi.com/products';

    
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        product = data;
        
        renderProdcuts(product);
        
});



function renderProdcuts(product) {
    for (let i = 0; i < product.length; i++) {
      productsEl.innerHTML += `
              <div class="item">
                  <div class="item-container">
                      <div class="item-img">
                          <img src="${product[i].image}" alt="${product[i].title}">
                      </div>
                      <div class="desc">
                          <h2>${product[i].title}</h2>
                          <h2><small>$</small>${product[i].price}</h2>
                          <p>
                              ${product[i].description}
                          </p>
                      </div>
                      <div class="add-to-cart" onclick="addToCart(${product[i].id})">
                          <img src="./icons/bag-plus.png" alt="add to cart">
                      </div>
                  </div>
              </div>
          `;
    };
  }

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


function addToCart(id) {
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnits("plus", id)
    } else {
        const item = product.find((product) => product.id === id);
        cart.push({
            ...item, 
            numberOfUnits: 1,
        });
    }
    updateCart();

}
function updateCart(){
    renderCartItems();
    renderSubTotal();

    localStorage.setItem("CART", JSON.stringify(cart));
}

 function renderSubTotal(){
    let totalPrice = 0, totalItems = 0;
     renderCartItems();
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

function renderCartItems() {
    cartItemsEl.innerHTML = ""; 
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
          <div class="cart-item">
              <div class="item-info" onclick="removeItemFromCart(${item.id})">
                  <img src="${item.image}" alt="${item.title}">
                  <h4>${item.title}</h4>
              </div>
              <div class="unit-price">
                  <small>$</small>${item.price}
              </div>
              <div class="units">
                  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
              </div>
          </div>
        `;
    });
  }

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }else if (action === "plus" && numberOfUnits < 15) {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    })
    updateCart();
}
fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'coding computer',
                    price: 15.5,
                    description: 'lorem ipsum set',
                    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))