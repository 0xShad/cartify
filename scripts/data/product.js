class Product {
    id;
    name;
    image;
    rating;
    priceCents;
    pogi;

    constructor(prodDetails) {
        this.id = prodDetails.id
        this.name = prodDetails.name
        this.image = prodDetails.image
        this.rating = prodDetails.rating
        this.priceCents = prodDetails.priceCents
        this.pogi = prodDetails.pogi
    }
}

export let products = []

export async function loadProducts() {
  const response = await fetch('https://supersimplebackend.dev/products/')
  const prodDetails = await response.json()

    products = prodDetails.map((prodDetails) => {
            return new Product(prodDetails)
    })
}


export function productsMatchItem(productId) {
    let matchProduct;

    products.forEach((productItem) => {
        if (productItem.id === productId) {
            matchProduct = productItem
        }
    })

    return matchProduct
} 