class ClientResponseException extends Error {
    constructor (statusCode, location) {
        super(`Err code ${statusCode} - [${location}] not found.`);

        this.statusCode = statusCode;
        this.location = location;
    }
}

module.exports = ClientResponseException;