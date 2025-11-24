// import { DataError } from "../utils/errorHandler.ts";
// import { SuperCustomError } from "../utils/errorHandler.ts";
export async function apiResponse() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        let productList = await response.json();
        productList = productList;
        return productList;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Caught an Error object:", error.message);
        }
        else {
            console.error(error);
            // throw new SuperCustomError("You pyscho, what did YOU DO???")
        }
        return null;
    }
}
const productResponse = await apiResponse();
const productList = productResponse?.products;
export { productList };
//# sourceMappingURL=apiService.js.map