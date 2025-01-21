// Funcionalidades de la tienda profesional Jhonier

document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector(".cart-items");
    const totalElement = document.querySelector(".total");
    let cart = [];

    // Función para agregar un producto al carrito
    function addToCart(productName, price) {
        // Buscar si ya existe en el carrito
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price, quantity: 1 });
        }

        renderCart();
    }

    // Función para renderizar el carrito
    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);

            total += item.price * item.quantity;
        });

        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Eventos para los botones "Agregar al Carrito"
    const productButtons = document.querySelectorAll(".btn-agregar");
    productButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("h3").textContent;
            const price = parseFloat(product.querySelector(".price").textContent.replace("$", ""));

            addToCart(productName, price);
        });
    });
});
