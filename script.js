
// three lines toggle menu on mobile device
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("open");
}

//cart btn redirection
let cartButton = document.querySelector(".cart-btn")
cartButton.addEventListener("click", function cartPage(){
    window.location.href = "cart.html";
})



//Main content == products,images,price,add to cart
const products = [
    {
        id : 1,
        name: "Coca-cola",
        price :720,
        piecesPerBox:24,
        image:"images/coca-cola.webp"
    },
    {
        id : 2,
        name:"Sprite",
        price:720,
        piecesPerBox:24,
        image:"images/sprite.webp"
    },
    {
        id: 3,
        name:"Sting",
        price:920,
        piecesPerBox:24,
        image:"images/sting.webp"
    },
    {
        id:4,
        name:"Thums Up",
        price:820,
        piecesPerBox:24,
        image:"images/thumbsup.webp"
    },
    {
        id:5,
        name:"Fanta",
        price:890,
        piecesPerBox:24,
        image:"images/fanta.webp"
    },
    {
        id:6,
        name:"Maza",
        price:980,
        piecesPerBox:24,
        image:"images/maza.webp"
    },
    {
        id:7,
        name:"7up",
        price:780,
        piecesPerBox:24,
        image:"images/7up.webp"
    },
    {
        id:8,
        name:"Bisleri",
        price:990,
        piecesPerBox:24,
        image:"images/bisleri.webp"
    },
    {
        id:9,
        name:"Mirinda",
        price:770,
        piecesPerBox:24,
        image:"images/mirinda.webp"
    },
    {
        id:10,
        name:"Monster",
        price:1280,
        piecesPerBox:12,
        image:"images/monster.webp"
    },
    {
        id:11,
        name: "Mountain-dew",
        price:990,
        piecesPerBox:24,
        image:"images/mountain-dew.webp"
    },
    {
        id:12,
        name:"Pepsi",
        price:880,
        piecesPerBox:24,
        image:"images/pepsi.webp"
    },
    {
        id:13,
        name:"Red bull",
        price:6330,
        piecesPerBox:24,
        image:"images/redbull1.webp"
    },
    {
        id:14,
        name:"Predator",
        price:1340,
        piecesPerBox:12,
        image:"images/predator.webp"
    },
    {
        id:15,
        name:"Jeera soda",
        price:880,
        piecesPerBox:24,
        image:"images/jeera.webp"
    }

]


//Selecting a div from HTML to render the products
const productList = document.getElementById("product-list")

//Using forEach() == To select every element's info from array named "products"
products.forEach(product=>{

    //creating card/div for every img
    const card = document.createElement("div")
    card.className = "product-card"
    
    //details inside every card using template literals
    card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>₹${product.price}/ box</p>
    <p>${product.piecesPerBox} pieces per box</p>
    <button onclick="addToCart(${product.id})" id="add-to-cart">Add to Cart</button>
    `;

    //Appending the card to div which we have created named "productList"
    productList.appendChild(card);
});



    let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addToCart(productId) {

  // ALWAYS reload latest cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      img: product.image
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  }

    /* =========================
       CART BADGE UPDATE
    ========================== */
    function updateCartBadge() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cartBadge");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  badge.style.display = totalQty ? "inline-block" : "none";
  badge.textContent = totalQty;
      }

    updateCartBadge(); // run on page load
