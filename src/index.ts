import { Product } from "./models/Product.ts";
import { apiResponse } from './services/apiService.ts'

const productArray: Promise<Product | null>  =  await apiResponse()


// console.log(productArray.products)
for(let x in productArray.products){
   console.log(productArray.products[x].title)
}
