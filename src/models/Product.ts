export class Product {
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

    constructor(
        id: number,
        title: string, 
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        sku: string,
        availabilityStatus: string,
        reviews: string[],
        images: string[],
        thumbnail: string,
        salesTax: number = .07, 
    ){
        this.id = id
        this.title = title
        this.price = price
        this.salesTax = salesTax
        this.description = description
        this.category = category
        this.price = price
        this.discountPercentage = discountPercentage
        this.rating = rating
        this.stock = stock
        this.sku = sku
        this.availabilityStatus = availabilityStatus
        this.reviews = reviews
        this.images = images
        this.thumbnail = thumbnail
        this.salesTax = salesTax
    }

    diplayDetails(): string{
        return `${this.title}(id:${this.id}) , product price is, ${this.price}.`
    }

    getPriceWithDiscount(): number{

        return this.price - (this.price * this.discountPercentage)
    }

}
