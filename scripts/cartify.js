import { renderMainPage } from "./mainPage/renderMainPage.js";
import { loadProducts } from "./data/product.js";
import { navBar } from '../nav.js'

async function renderPage() {
    navBar()
    await loadProducts()
    renderMainPage()
}

renderPage()