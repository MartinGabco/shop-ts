export async function getProducts() {
    const results = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');
    const products = results.json();
    return products;
}