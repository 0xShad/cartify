import { products } from "../data/product.js";
import { formatMoney } from "../../utils/formatMoney.js";
import { incrementQuantity, decrementQuantity } from "./counter.js";


export function renderMainPage() {
    let productHTML = ''
    let productQuantities = {}

   products.forEach((item) => {
    const html = `
<div class="card flex flex-col justify-between max-w-sm w-full shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg">
            <img src="${item.image}" alt="" class="p-8 rounded-t-lg">
            <div class="px-5 pb-8">
              <h5 class="text-sm min-w-[48px] max-h-[72px] mb-2">${item.name}</h5>
              <img src="images/products/ratings/rating-${item.rating.stars * 10}.png" alt="" class="h-4">
               <div class="mt-2">
                <button class="px-2 bg-[#3929ff] subQuantityBtn" data-product-id="${item.id}">-</button>
                <span class="js-quantity-${item.id}">1</span>
                <button class="px-2 bg-[#3929ff] addQuantityBtn" data-product-id="${item.id}">+</button>
              </div>
              <div class="flex justify-between mt-10 items-center">
                <h5 class="font-bold">$${formatMoney(item.priceCents)}</h5>
                
                <button class="bg-[#3929ff] px-1.5 py-1 rounded-lg lg:px-2.5 lg:py-2">Add to cart</button>
              </div>
            </div>  
     </div>
    
    `

    productQuantities[item.id] = 1
    productHTML += html
   })
   
   
   // append products to the dom
   document.querySelector('.product-grid')
   .innerHTML = productHTML

   //quantity counter for add
   document.querySelectorAll('.addQuantityBtn')
   .forEach((button) => {
    button.addEventListener('click', () => {
      incrementQuantity(button, productQuantities)
    })
   })
   //quantity counter for sub
   document.querySelectorAll('.subQuantityBtn')
   .forEach((button) => {
    button.addEventListener('click', () => {
      decrementQuantity(button, productQuantities)
    })
   })
  


}