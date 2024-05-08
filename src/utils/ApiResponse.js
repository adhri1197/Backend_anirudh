class ApiResponse {
    constructor(statusCode, data, message = "Success"){ 
        this.statusCode = statusCode 
        this.data = data
        this.message = message 
        this.success = statusCode < 400 // if the status code is less than 400, the success is true
    }
}

export { ApiResponse }