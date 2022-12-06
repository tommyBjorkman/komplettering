

let cart = [];
            

product.addEventListener("click", (event) => {
    let target = event.target.closest(".button-favorites");

    if (!target || !cardContainer.contains(target)) {
      return;
    }})


const addCart = document.getElementsByClassName('product');
for ( let i=0; i<product.length; i++ ) {
product[i].addEventListener("click", addToCart)};
console.log(product);
function addToCart(id) {
     if(cart.some((item) => item.id === id)){
            alert("product already in cart")
        }else{
           const item = data.find((data) => data.id === id);

            cart.push(item);

    
      }};


      const targetNode = document.querySelector("div");
const observerOptions = {
childList: true,
attributes: true,
subtree: true
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, observerOptions);