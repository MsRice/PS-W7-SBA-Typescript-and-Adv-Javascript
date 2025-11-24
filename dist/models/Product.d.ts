export declare class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    sku: string;
    availabilityStatus: string;
    reviews: string[];
    images: string[];
    thumbnail: string;
    salesTax: number;
    constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, sku: string, availabilityStatus: string, reviews: string[], images: string[], thumbnail: string, salesTax?: number);
    diplayDetails(): string;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map