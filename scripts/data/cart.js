export let cart = [{
}]


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
    console.log(cart)
}