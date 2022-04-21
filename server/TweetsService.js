import { DataService } from "./DataService";
import { apiUrl } from "./api-url";

export class TweetsService extends DataService {
    constructor(suffix = '/') {
        super();
        this.url = apiUrl.tweets + suffix;
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