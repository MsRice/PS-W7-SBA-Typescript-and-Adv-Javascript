export class NetworkError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
export class DataError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'DataError';
    }
}
export class SuperCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SuperCustomError';
    }
}
//# sourceMappingURL=errorHandler.js.map