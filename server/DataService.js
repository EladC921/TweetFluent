import { ErrorHandler } from "./ErrorHandler";

export class DataService {
  constructor() { }

  /**
   * @@@ HTTP GET
   * param {*} url 
   * returns Promise<any>[]
   */
  getAll(url) {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  }

  /**
   * @@@ HTTP GET
   * param {*} url 
   * param {*} id Url var: ~/id
   * param {*} params Url params: ~?name1=value1&name2=value2...
   * returns Promise<any>
   */
  get(url, id = undefined, params = []) {
    if (!id && !params) {
      new ErrorHandler('GET request must include at least 1 parameter.').log();
    }
    let _url = url;
    if (id !== undefined) _url += "/" + id;
    else {
      params.map((param, index) => {
        _url += (index === 0) ? "?" : "&";
        _url += param.name + "=" + param.value;
      });
    }
    console.log(_url);

    return fetch(_url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  }

  /**
   * @@@ HTTP POST
   * param {*} url 
   * param {*} data Data [FromBody]
   * param {*} params Url params: ~?name1=value1&name2=value2...
   * returns Promise<any>
   */
  post(url, data = undefined, params = []) {
    let _url = url;
    if (!data) {
      params.map((param, index) => {
        _url += (index === 0) ? "?" : "&";
        _url += param.name + "=" + param.value;
      });
    }

    return fetch(_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  /**
   * @@@ HTTP PUT
   * param {*} url 
   * param {*} data 
   * returns Promise<any>
   */
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

  /**
   * @@@ HTTP Delete
   * param {*} url 
   * param {*} id 
   * param {*} params Url params: ~?name1=value1&name2=value2... 
   * returns Promise<any>
   */
  delete(url, id = undefined, params = []) {
    let _url = url;
    if (id) url + "/" + id;
    else {
      params.map((param, index) => {
        _url += (index === 0) ? "?" : "&";
        _url += param.name + "=" + param.value;
      });
    }

    return fetch(_url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => response.json());
  }
}
