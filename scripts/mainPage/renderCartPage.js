import {navBar} from '../../nav.js'
import { loadProducts } from '../data/product.js'
import { loadCheckoutSummary } from '../cartPage/checkoutsummary.js'
import { renderOrderDetails } from '../cartPage/orderDetails.js'

async function renderCartPage() {
    navBar() 
    await loadProducts()
    loadCheckoutSummary()
   renderOrderDetails()

}

renderCartPage()