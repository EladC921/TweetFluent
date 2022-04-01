export class ErrorHandler {
    constructor(error) {
        this.error = error;
    }

    getError() {
        return this.error;
    }

    getErrorMessage() {
        return this.error.message;
    }

    static log() {
        if (this.error.status === 404) console.log('404 error - not found');
        else if (this.error.status === 400) console.log('400 error - bad request');
        else if (this.error.status === 500) console.log('500 error - internal server error');
        else console.log('error=', this.error);
    }
}