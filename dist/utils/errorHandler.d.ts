export declare class NetworkError extends Error {
    status: number;
    constructor(message: string, status: number);
}
export declare class DataError extends Error {
    constructor(message: string, status: number);
}
export declare class SuperCustomError extends Error {
    constructor(message: string);
}
//# sourceMappingURL=errorHandler.d.ts.map