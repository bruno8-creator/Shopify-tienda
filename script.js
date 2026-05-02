const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartTrigger = document.querySelector(".cart-trigger");
const closeCart = document.querySelector(".close-cart");
const addToCart = document.querySelector(".add-to-cart");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartItem = document.querySelector("[data-cart-item]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const toast = document.querySelector("[data-toast]");

let quantity = 0;
let toastTimer;

function renderCart() {
  cartCount.textContent = quantity;
  cartTotal.textContent = quantity > 0 ? `$${quantity * 19}` : "$0";
  cartItem.hidden = quantity === 0;
  cartEmpty.hidden = quantity > 0;
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function showToast() {
  window.clearTimeout(toastTimer);
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

cartTrigger.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) {
    closeCartDrawer();
  }
});

addToCart.addEventListener("click", () => {
  quantity = 1;
  renderCart();
  showToast();
  openCart();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
  }
});

renderCart();
