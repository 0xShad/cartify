import {navBar} from '../../nav.js'
import { loadProducts } from '../data/product.js'
import { loadCheckoutSummary } from '../cartPage/checkoutsummary.js'

async function renderCartPage() {
    navBar() 
    await loadProducts()
    loadCheckoutSummary()

}

renderCartPage()