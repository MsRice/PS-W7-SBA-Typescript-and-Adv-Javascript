export declare class Product {
    sku: number;
    name: string;
    price: number;
    salesTax: number;
    discount: number;
    constructor(sku: number, name: string, price: number, salesTax: number | undefined, discount: number);
    diplayDetails(): string;
    getPriceWithDiscount(): number;
}
//# sourceMappingURL=Product.d.ts.map