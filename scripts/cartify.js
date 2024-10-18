import { renderMainPage } from "./mainPage/renderMainPage.js";
import { loadProducts } from "./data/product.js";

async function renderPage() {
    await loadProducts()
    renderMainPage()
}

renderPage()