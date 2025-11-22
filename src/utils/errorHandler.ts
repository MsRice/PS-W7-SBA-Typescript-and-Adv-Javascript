export class NetworkError extends Error {
    status: number

    constructor(message:string , status: number){
        super(message)
        this.status = status
    }
}

export class DataError extends Error{
    constructor(message:string , status: number){
        super(message)
        this.name = 'DataError'
    }

}
export class SuperCustomError extends Error{
    constructor(message:string){
        super(message)
        this.name = 'SuperCustomError'
    }
}