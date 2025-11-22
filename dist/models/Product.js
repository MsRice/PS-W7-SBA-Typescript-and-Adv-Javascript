export class Product {
    sku;
    name;
    price;
    salesTax;
    discount;
    constructor(sku, name, price, salesTax = .07, discount) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.salesTax = salesTax;
        this.discount = discount;
    }
    diplayDetails() {
        return `${this.name}(sku:${this.sku}) , product price is, ${this.price}.`;
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discount);
    }
}
//# sourceMappingURL=Product.js.map