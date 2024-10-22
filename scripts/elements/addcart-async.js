export function addingItemInterval(id) {
    let button = document.querySelector(`.js-add-cart-btn-${id}`);
    button.textContent = 'Added';
    
    // Change the text back after 1.5 seconds
    setTimeout(() => {
        button.textContent = 'Add to cart';
    }, 1500);
}