import { DataService } from "./DataService";
import { apiUrl } from "./api-url";

export class UsersService extends DataService {
    constructor(suffix = '/') {
        super();
        this.url = apiUrl.users + suffix;
    }

    getAll() {
        return super.getAll(this.url);
    }

    /**
     * @@@ ~/api/users/{email}
     * @param {*} email
     * @returns User
     */
    get(email) {
        return super.get(this.url, email);
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