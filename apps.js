const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");

function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
              <div class="item">
                  <div class="item-container">
                      <div class="item-img">
                          <img src="${product.imgSrc}" alt="${product.name}">
                      </div>
                      <div class="desc">
                          <h2>${product.name}</h2>
                          <h2><small>$</small>${product.price}</h2>
                          <p>
                              ${product.description}
                          </p>
                      </div>
                      <div class="add-to-wishlist">
                          <img src="./icons/heart.png" alt="add to wish list">
                      </div>
                      <div class="add-to-cart" onclick="addToCart(${product.id})">
                          <img src="./icons/bag-plus.png" alt="add to cart">
                      </div>
                  </div>
              </div>
          `;
    });
  }
renderProdcuts();

let cart = [];

updateCart();
function addToCart(id) {
    if(cart.some((item) => item.id === id)){
        alert("product already in cart")
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item, 
            numberOfUnits: 1,
        });
    }


}
function updateCart(){
    renderCartItems();
   // renderSubTotal();
}
function renderCartItems() {
    cartItemsEl.innerHTML = ""; 
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
          <div class="cart-item">
              <div class="item-info" onclick="removeItemFromCart(${item.id})">
                  <img src="${item.imgSrc}" alt="${item.name}">
                  <h4>${item.name}</h4>
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
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === "minus"){
                numberOfUnits--;
            }else if (action === "plus") {
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