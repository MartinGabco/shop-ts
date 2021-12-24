// fetching products

export interface Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    price_sign: string;
    image_link: string;
    website_link: string;
};

export async function getProducts(): Promise<Product[]> {
    const results = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeshadow');
    const products = results.json();
    return products;
};

// fetching brands

export interface Brand {
    id: number;
    name: string;
};

export async function getBrands(): Promise<Brand[]> {
    const results = await fetch('https://shop-ts-default-rtdb.firebaseio.com/brands.json');
    const brands = results.json();
    return brands;
}
