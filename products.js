const products = [
  {
    id: 0,
    name: "T-shirt 1",
    price: 29.99,
    instock: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t1.png",
  },
  {
    id: 1,
    name: "T-shirt 2",
    price: 24.99,
    instock: 43,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t2.png",
  },
  {
    id: 2,
    name: "T-shirt 3",
    price: 19.99,
    instock: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t3.png",
  },
  {
    id: 3,
    name: "T-shirt 4",
    price: 25.99,
    instock: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t4.png",
  },
  {
    id: 4,
    name: "T-shirt 5",
    price: 29.99,
    instock: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t5.png",
  },
  {
    id: 5,
    name: "T-shirt 6",
    price: 39.99,
    instock: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, error.",
    imgSrc: "./img/t6.png",
  },
];


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