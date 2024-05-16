document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeModal = document.querySelector('.close');
    const checkoutTotal = document.getElementById('checkout-total');
    const moneyInput = document.getElementById('money-input');
    const calculateChangeBtn = document.getElementById('calculate-change-btn');
    const changeOutput = document.getElementById('change');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            const product = this.parentElement;
            const productName = product.querySelector('h2').textContent;
            const productPrice = parseFloat(product.querySelector('.price').textContent);
            const productQuantity = parseInt(product.querySelector('.quantity').value);

            addToCart(productName, productPrice, productQuantity);
        });
    });

    function addToCart(name, price, quantity) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${name} - $${price.toFixed(2)} x ${quantity}`;

        cartItems.appendChild(cartItem);

        const total = parseFloat(totalPriceElement.textContent);
        totalPriceElement.textContent = (total + (price * quantity)).toFixed(2);
    }

    document.getElementById('checkout-btn').addEventListener('click', function() {
        checkoutTotal.textContent = totalPriceElement.textContent;
        checkoutModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        checkoutModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    calculateChangeBtn.addEventListener('click', function() {
        const total = parseFloat(checkoutTotal.textContent);
        const money = parseFloat(moneyInput.value);
        const change = money - total;
        changeOutput.textContent = `Change: $${change.toFixed(2)}`;
    });
});
function showReceipt() {
    const buyerName = buyerNameInput.value;
    const total = parseFloat(checkoutTotal.textContent);
    const money = parseFloat(moneyInput.value);
    const change = money - total;
}
receiptDiv.innerHTML = `
            <h2>Receipt</h2>
            <p>Buyer: ${buyerName}</p>
            <p>Total: $${total.toFixed(2)}</p>
            <p>Money Received: $${money.toFixed(2)}</p>
            <p>Change: $${change.toFixed(2)}</p>
            <p>Products:</p>
            <ul>${cartItems.innerHTML}</ul>
        `;
