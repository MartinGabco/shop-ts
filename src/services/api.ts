export interface Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    price_sign: string;
    image_link: string;
    website_link: string;
}

export async function getProducts(): Promise<Product[]> {
    const results = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');
    const products = results.json();
    return products;
}