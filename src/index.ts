import { Product } from "./models/Product.ts";
import { apiResponse } from './services/apiService.ts'

const productResponse: Promise<Product | null>  =  await apiResponse()

// console.log(productResponse[0])

const productArray: Product[] = productResponse.map(el => 
    new Product(el.id, el.title, el.description ,el.category, el.price, el.discountPercentage, el.rating , el.stock, el.sku, el.availabilityStatus, el.reviews, el.images, el.thumbnail)
)

for(let x in productArray){
//    console.log(`${productArray[x]?.diplayDetails()} and with tax : $${productArray[x]?.getPriceWithDiscount()}`)
    console.log(productArray[x]?.diplayDetails())
}

