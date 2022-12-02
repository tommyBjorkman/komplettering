const productsEl = document.querySelector(".products");

let datar = fetch('https://fakestoreapi.com/products')
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
                        <div class="add-to-cart" "add-cart" "product(${data[i].id})">
                            <img src="./icons/bag-plus.png" alt="add to cart">
                        </div>
                    </div>
                </div>
                    `;
                    
                };
                
                
                
            });
            let cart = [];

            const addCart = document.getElementByClass('.add-cart');

            addCart.addEventListener("click", addToCart)



            function addToCart(id) {
                 if(cart.some((item) => item.id === id)){
                        alert("product already in cart")
                    }else{
                       const item = data.find((data) => data.id === id);
    
                        cart.push(item);
    
                console.log(cart);
                  }}

