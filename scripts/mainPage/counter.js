export function incrementQuantity(button, productQuantities) {
    const productId = button.dataset.productId
    productQuantities[productId] += 1
    let prodQuantityHTML = document.querySelector(`.js-quantity-${productId}`)
    prodQuantityHTML.innerHTML = productQuantities[productId]
}

export function decrementQuantity(button, productQuantities) {
    const productId = button.dataset.productId
    let prodQuantityHTML = document.querySelector(`.js-quantity-${productId}`)

    if(productQuantities[productId] <= 1) {
      alert('error')
    } else {
      productQuantities[productId] -= 1
    
      prodQuantityHTML.innerHTML = productQuantities[productId]
    }
}