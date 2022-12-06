const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");

let datar = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                for (let i = 1; i < data.length; i++) {
                    const productId = data[i].id;
                    productsEl.innerHTML += `
                    <div class="item">
                    <div class="item-container">
                        <div class="item-img">
                            <img src="${data[i].image}" alt="${data[i].title}">
                        </div>
                        <div class="desc">
                            <h2>${data[i].title}</h2>
                            <h2><small>$</small>${data[i].price}</h2>
                            <p>
                            ${data[i].description}
                            </p>
                        </div>
                        <div class="add-to-wishlist">
                            <img src="./icons/heart.png" alt="add to wish list">
                        </div>
                        <div class="add-to-cart" "add-cart" onclick="addToCart(${data[i].id})">
                            <img src="./icons/bag-plus.png" alt="add to cart">
                        </div>
                    </div>
                </div>
                    `;
                    
                };
                
                
                
            });

let cart = [];


function addToCart(id) {
    if(cart.some((item) => item.id === id)){
        alert("product already in cart")
    } else {
        const item = productId.find((productId) => productId === id);
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
}
function renderCartItems(){
    cart.forEach((item) => {
        cartItemsEl.innetHTML += `
        <div class="cart-item">
                    <div class="item-info">
                        <img src="${data[i].image}" alt="${data[i].title}">
                        <h4>${data[i].title}</h4>
                    </div>
                    <div class="unit-price">
                        <small>$</small>${data[i].price}
                    </div>
                    <div class="units">
                        <div class="btn minus">-</div>
                        <div class="number">1</div>
                        <div class="btn plus">+</div>           
                    </div>
                </div>
        `
    });
}