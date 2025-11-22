import type { Product } from "../models/Product";
// import { DataError } from "../utils/errorHandler";
// import { SuperCustomError } from "../utils/errorHandler";

export async function apiResponse():Promise<Product | null>{
    
    try {
        const response = await fetch('https://dummyjson.com/products')
        const productList : Product = await response.json()
        // console.log(productList)
        return productList
    
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Caught an Error object:", error.message);
        } else {
            console.error("Caught an unknown error:" , error)
            // throw new SuperCustomError("You pyscho, what did YOU DO???" )
            // throw new DataError("nnsns" , 783)
    }
    return null
    }
}

