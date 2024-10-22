import dayjs from 'dayjs';
import { cart } from '../data/cart.js';
import { productsMatchItem } from '../data/product.js';
import { formatMoney } from '../../utils/formatMoney.js';

export function renderOrderDetails() {
  const tax = 0.01
  const shippingFee = 599
  const today = dayjs()
  const formatDay = today.add(7, 'days').format('dddd, MMMM D')
  let cartItemTotal = 0
  let total = 0


  cart.forEach((cartItem) => {
    const cartId = cartItem.productId
    const product = productsMatchItem(cartId)
    cartItemTotal += 1
    total += product.priceCents * cartItem.quantity
  })

  const totalBeforeTax = total + shippingFee
  const taxTotal = totalBeforeTax * tax
  const totalSummary = totalBeforeTax + taxTotal

  let deliveryDateHTML = `
  <h1>Delivery date: ${formatDay}</h1>
    <div class="order-sum mt-3">
          <h1>Order summary</h1>
          <div class="">
            <div class="flex justify-between">
              <p>Items (${cartItemTotal})</p>
              <p>$${formatMoney(total)}</p>
            </div>
            <div class="flex justify-between">
              <p>Shipping fee</p>
              <p>$5.99</p>
            </div>
            <div class="flex justify-between">
              <p>Total before tax</p>
              <p>$${formatMoney(totalBeforeTax)}</p>
            </div>
            <div class="flex justify-between">
              <p>Tax</p>
              <p>10%</p>
            </div>
            <div class="flex justify-between">
              <p>TOTAL</p>
              <p>$${formatMoney(totalSummary)}</p>
            </div>
            <div class="flex justify-end">
            <button class="bg-yellow-500 px-8 py-3 text-md rounded-md mt-4">Checkout</button>
            </div>
        </div>
        
        </div>
`


  document.querySelector('.order-sum-col').innerHTML = deliveryDateHTML

}