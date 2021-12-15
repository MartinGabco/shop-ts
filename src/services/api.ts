export interface Product {
    id: number,
    name: string,
    image_link: string,
}

export async function getProducts(): Promise<Product[]> {
    const results = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');
    const products = results.json();
    return products;
}