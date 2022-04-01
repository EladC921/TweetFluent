import { DataService } from "./DataService";

export class UsersService extends DataService {
    constructor() {
        super();
        this.url = 'http://localhost:3000/api/Users';
    }

    getAll() {
        return super.getAll(this.url);
    }

    get(id) {
        return super.get(this.url, id);
    }

    post(data) {
        return super.post(this.url, data);
    }

    put(data) {
        return super.put(this.url, data);
    }

    delete(id) {
        return super.delete(this.url, id);
    }
}