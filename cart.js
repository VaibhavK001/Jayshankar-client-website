let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsEl = document.getElementById("cart-items");
const summaryListEl = document.getElementById("summary-list");
const finalTotalEl = document.getElementById("finalTotal");

function goBack(){
  window.location.href ="index.html"
  updateCartBadge();
}


/* =========================
   RENDER CART
========================= */
function renderCart() {
  cartItemsEl.innerHTML = "";
  summaryListEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
    finalTotalEl.textContent = "0";
  } else {
    let finalTotal = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.qty;
      finalTotal += itemTotal;

      /* Cart Items UI */
      cartItemsEl.innerHTML += `


        <div class="cart-item">
          <div class="cart-img">
             <img src="${item.img}">
          </div>
          <div class="cart-description">
            <h4>${item.name}</h4>
            <p>Price: ₹${item.price}</p>
            <div class="qty-controls">
             <button onclick="decreaseQty(${item.id})">−</button>
             <span>${item.qty}</span>
             <button onclick="increaseQty(${item.id})">+</button>
            </div>
            <p>Item Total: ₹${itemTotal}</p>
            <button class="remove-btn" onclick="removeItem(${item.id})">
              Remove
            </button>
          </div>
        </div>

      `;

      /* Summary UI */
      summaryListEl.innerHTML += `
        <div class="summary-row">
          <span>${item.name} × ${item.qty}</span>
          <span>₹${itemTotal}</span>
        </div>
      `;
    });

    finalTotalEl.textContent = finalTotal;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   QUANTITY CONTROLS
========================= */
function increaseQty(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  renderCart();
}

function decreaseQty(id) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty--;

  if (item.qty === 0) {
    cart = cart.filter((i) => i.id !== id);
  }

  renderCart();
}

function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

/* =========================
   INITIAL LOAD
========================= */
renderCart();
