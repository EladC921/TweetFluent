import { ErrorHandler } from "./errorHandler"

export class DataService {
    constructor() { }

    getAll(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        }).then(response => response.json()).catch(err => new ErrorHandler(err).log())
    }

    get(url, id) {
        return fetch(url + '/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        }).then(response => response.json()).catch(err => new ErrorHandler(err).log())
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(err => new ErrorHandler(err).log())
    }

    put(url, data) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(err => new ErrorHandler(err).log())
    }

    delete(url, id) {
        return fetch(url + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        }).then(response => response.json()).catch(err => new ErrorHandler(err).log())
    }
}