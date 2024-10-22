import { cart } from "../data/cart"
import {saveToStorage} from '../data/cart.js'

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

export function incrementQuantityCheckout(button) {
  const id = button.dataset.productId 

  cart.forEach((cartItem) => {
    if(id === cartItem.productId) {
      cartItem.quantity += 1
      document.querySelector(`.js-quantity-${id}`).innerHTML = cartItem.quantity
      saveToStorage()
    }
  })
}

export function decrementQuantityCheckout(button) {
  const id = button.dataset.productId 

  cart.forEach((cartItem) => {
    if(id === cartItem.productId) {
      if(cartItem.quantity <= 1) {
        alert('error')
        cartItem.quantity = 1
      } else {
        cartItem.quantity -= 1
        document.querySelector(`.js-quantity-${id}`).innerHTML = cartItem.quantity
        saveToStorage()
      }
     
    }
  })
}