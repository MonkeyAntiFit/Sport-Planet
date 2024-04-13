document.getElementById('increase').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
});

document.getElementById('decrease').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

document.getElementById('addToCart').addEventListener('click', function() {
    var quantity = parseInt(document.getElementById('quantity').value);
    alert('Se agregaron ' + quantity + ' patines al carrito.');
});