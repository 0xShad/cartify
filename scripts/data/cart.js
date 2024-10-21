export let cart = JSON.parse(localStorage.getItem('cart')) || []


export function addCart(productId, productQuantities) {
    let itemExist;

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            itemExist = cartItem
        } 
    })

    if(itemExist) {
        itemExist.quantity += productQuantities[productId] // if item exist add value from productQuantities
    } else {
        cart.push({productId: productId, quantity: productQuantities[productId]})
    }

    let prodQuantityHTML = document.querySelector(`.js-quantity-${productId}`)
    prodQuantityHTML.innerHTML = 1
    saveToStorage()
}

export function updateCartQuantity() {
    let counter = 0
    cart.forEach((cartItem) => {
        counter += cartItem.quantity
    })

    document.querySelector('.cart-quantity-html').innerHTML = counter
    saveToStorage()
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}