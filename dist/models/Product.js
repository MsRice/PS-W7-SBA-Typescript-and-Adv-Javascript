export class Product {
    id;
    title;
    description;
    category;
    price;
    discountPercentage;
    rating;
    stock;
    sku;
    availabilityStatus;
    reviews;
    images;
    thumbnail;
    salesTax;
    constructor(id, title, description, category, price, discountPercentage, rating, stock, sku, availabilityStatus, reviews, images, thumbnail, salesTax = .07) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.salesTax = salesTax;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.sku = sku;
        this.availabilityStatus = availabilityStatus;
        this.reviews = reviews;
        this.images = images;
        this.thumbnail = thumbnail;
        this.salesTax = salesTax;
    }
    diplayDetails() {
        return `${this.title}(id:${this.id}) , product price is, ${this.price}.`;
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage);
    }
}
//# sourceMappingURL=Product.js.map