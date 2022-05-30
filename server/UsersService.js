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
     * @@@ HTTP GET /api/users?email={email}
     * @param {*} email
     * @returns Promise<User>
     */
    get(email) {
        return super.get(this.url, undefined, [{ name: 'email', value: "'" + email.toLowerCase() + "'" }]);
    }

    /**
     * Is the user subscribing the influencer
     * @@@ HTTP GET /api/users/isSubscribe?uid={uid}&iid={iid}
     * @param {*} uid 
     * @param {*} iid 
     * @returns Promise<boolean>
     */
    getIsSubscribe(uid, iid) {
        return super.get(this.url, undefined, [{ name: 'uid', value: uid }, { name: 'iid', value: iid }]);
    }

    /**
     * @@@ HTTP POST /api/users
     * @param {*} data User data
     * @returns Promise<User>
     */
    post(data) {
        return super.post(this.url, data);
    }

    put(data) {
        return super.put(this.url, data);
    }

    delete(id) {
        return super.delete(this.url, id);
    }

    /**
     * @@@ HTTP POST /api/users/subscribe?uid={uid}&iid={iid}
     * @param {*} data 
     * @returns Promise<any>
     */
    subscribeInfluencer(uid, iid) {
        return super.post(this.url, undefined, [{ name: 'uid', value: uid }, { name: 'iid', value: iid }]);
    }

    /**
     * @@@ HTTP DELETE /api/users/unsubscribe?uid={uid}&iid={iid}
     * @param {*} uid 
     * @param {*} iid 
     * @returns Promise<any>
     */
    unsubscribeInfluencer(uid, iid) {
        return super.delete(this.url, undefined, [{ name: 'uid', value: uid }, { name: 'iid', value: iid }]);
    }
}