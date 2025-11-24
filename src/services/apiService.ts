import type { Product } from "../models/Product";
// import { DataError } from "../utils/errorHandler.ts";
// import { SuperCustomError } from "../utils/errorHandler.ts";

export async function apiResponse():Promise<Product | null>{
    
    try {
        const response = await fetch('https://dummyjson.com/products')
        let productList : Product = await response.json()
        productList = productList
        return productList
    
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Caught an Error object:", error.message);
        } else {
            console.error(error)
            // throw new SuperCustomError("You pyscho, what did YOU DO???")
        }
        return null
    }
}

const productResponse: Product | null  =  await apiResponse()

const productList: Product[] = productResponse?.products 

export {productList}
