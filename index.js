const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsList = document.getElementById('cart-items');
  let cartTotal = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const product = this.parentElement;
      const productName = product.querySelector('h3').textContent;
      const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));
      
      const item = document.createElement('li');
      item.textContent = `${productName} - $${productPrice}`;
      cartItemsList.appendChild(item);
      
      cartTotal += productPrice;
      document.getElementById('cart-total').textContent = `$${cartTotal}`;
    });
  });

  document.getElementById('checkout-btn').addEventListener('click', function() {
    // Implement checkout logic here
    alert('Redirecting to payment gateway for checkout!');
  });
});
