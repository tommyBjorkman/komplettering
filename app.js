/* app.js */
const productsEl = document.querySelector(".products");

let data = fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                for (let i = 1; i < data.length; i++) {
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
                        <div class="add-to-cart" onclick="addToCart(${data[i].id})">
                            <img src="./icons/bag-plus.png" alt="add to cart">
                        </div>
                    </div>
                </div>
                    `;
                };
            });

            