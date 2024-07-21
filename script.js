let cart = [];

function addToCart(itemName) {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);

    if (quantity > 0) {
        const existingItem = cart.find(item => item.name === itemName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name: itemName, quantity: quantity, price: 100 });
        }
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartContents = document.getElementById('cart-contents');
    const cartSummary = document.getElementById('cart-summary');
    cartContents.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.quantity * item.price;
        subtotal += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item row mb-3';
        itemDiv.innerHTML = `
            <div class="col-8">
                <p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price} - Total: $${itemTotal}</p>
            </div>
            <div class="col-4 text-right">
                <button class="btn btn-danger" onclick="removeItem('${item.name}')">Remove</button>
            </div>
        `;
        cartContents.appendChild(itemDiv);
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    cartSummary.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Tax: $${tax.toFixed(2)}</p>
        <p>Total: $${total.toFixed(2)}</p>
    `;
}

function removeItem(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    updateCartDisplay();
}






