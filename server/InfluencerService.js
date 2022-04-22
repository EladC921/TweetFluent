import { DataService } from "./DataService";
import { apiUrl } from "./api-url";

export class InfluencerService extends DataService {
  constructor(suffix = "/") {
    super();
    this.url = apiUrl.influencers + suffix;
  }

  getAll() {
    return super.getAll(this.url);
  }

  get(param) {
    return super.get(this.url, param);
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
