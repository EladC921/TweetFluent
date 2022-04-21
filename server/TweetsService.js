import { DataService } from "./DataService";

export class TweetsService extends DataService {
    constructor(suffix = '/') {
        super();
        this.url = 'https://proj.ruppin.ac.il/bgroup68/test2/tar1/api/Tweets' + suffix;
    }

    getAll() {
        console.log(this.url);
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