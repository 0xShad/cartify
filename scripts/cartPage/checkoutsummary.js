import {cart} from '../data/cart.js'
import { productsMatchItem } from '../data/product.js'
import { formatMoney } from '../../utils/formatMoney.js'

export function loadCheckoutSummary() {
    let cartItemHTML = ''

    cart.forEach((cartItem) => {
        const cartId = cartItem.productId
        const product = productsMatchItem(cartId)

        cartItemHTML +=
        `
    <div class="card p-5 dark:bg-gray-800 dark:border-gray-700 rounded-lg">
            <div class="cart-container grid grid-cols-2 mt-3 gap-4">

                <img class="rounded-sm" src="${product.image}" alt="">
                <div class="details">
                    <h1 class="text-xs mb-2">${product.name}</h1>
                </div>
              </div>
                <div class="flex justify-between mt-5 items-center">
                  <div class="counter-quantity flex gap-5 items-center">
                    <button class="bg-[#3929ff] px-3 py-1 rounded-md">-</button>
                    <span>${cartItem.quantity}</span>
                    <button class="bg-[#3929ff] px-3 py-1 rounded-md">+</button>
                  </div>
                  <div class="price text-right">
                    <h1>$${(formatMoney(product.priceCents) * cartItem.quantity ).toFixed(2)}</h1>
                    <span class="text-red-600 cursor-pointer">delete</span>
                  </div>
                </div>
                </div>
        ` 

        document.querySelector('.cart-summary').innerHTML = cartItemHTML
    })
}