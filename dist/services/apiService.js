import { DataError } from "../utils/errorHandler";
import { SuperCustomError } from "../utils/errorHandler";
(async () => {
    try {
        const response = await fetch('https://dummyjson.com/produpcts');
        const productList = await response.json();
        // console.log(productList)
        return productList;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Caught an Error object:", error.message);
        }
        else {
            console.error("Caught an unknown error:", error);
            throw new SuperCustomError("You pyscho, what did YOU DO???");
            // throw new DataError("nnsns" , 783)
        }
        return null;
    }
})();
//# sourceMappingURL=apiService.js.map