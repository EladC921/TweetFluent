export class DataService {
    constructor() { }

    getAll(url) {
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((response) => response.json());
    }

    get(url, param) {
        return fetch(url + "/" + param, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((response) => response.json());
    }

    post(url, data) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    put(url, data) {
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }

    delete(url, id) {
        return fetch(url + "/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((response) => response.json());
    }
}
