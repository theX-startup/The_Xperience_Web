import { create } from "apisauce";
import _, { reject } from "lodash";


// const baseUrl = "http://192.168.0.189:3000";
const baseUrl = "https://thexperience.onrender.com";


export const api = create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("TheX_User_Token"),
  },
});

class RestApi {
  static isConnected(): Promise<boolean> {
    return new Promise<boolean>((fulfill) => {
      fulfill(navigator.onLine);
    });
  }

  static async getCall(urlPath: string): Promise<any> {
    let context = this;
    return new Promise<any>((resolve, reject) => {
      context
        .isConnected()
        .then(() => {
          api.get(baseUrl + urlPath).then((response: any) => {
            if (response.status === 200) {
              resolve(response.data);
            } else {
              if (response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else reject(response);
            }
          });
        })
        .catch((error) => reject(error));
    }).catch(() => {
      reject({
        message: "The server is not available",
      });
    });
  }

  static async postCall(urlPath: string, data: any): Promise<any> {
    let context = this;
    return new Promise<any>((resolve, reject) => {
      context
        .isConnected()
        .then(() => {
          api.post(baseUrl + urlPath, data).then((response: any) => {
            if (response.status === 200) {
              resolve(response.data);
            } else {
              if (response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else reject(response);
            }
          });
        })
        .catch((error) => reject(error));
    }).catch(() => {
      reject({
        message: "The server is not available",
      });
    });
  }

  static async putCall(urlPath: string, data: any): Promise<any> {
    let context = this;
    return new Promise<any>((resolve, reject) => {
      context
        .isConnected()
        .then(() => {
          api.put(baseUrl + urlPath, data).then((response: any) => {
            if (response.status === 200) {
              resolve(response.data);
            } else {
              if (response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else reject(response);
            }
          });
        })
        .catch((error) => reject(error));
    }).catch(() => {
      reject({
        message: "The server is not available",
      });
    });
  }

  static async deleteCall(urlPath: string): Promise<any> {
    let context = this;
    return new Promise<any>((resolve, reject) => {
      context
        .isConnected()
        .then(() => {
          api.delete(baseUrl + urlPath).then((response: any) => {
            if (response.status === 200) {
              resolve(response.data);
            } else {
              if (response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else reject(response);
            }
          });
        })
        .catch((error) => reject(error));
    }).catch(() => {
      reject({
        message: "The server is not available",
      });
    });
  }

  static async getCallWithQuery(urlPath: string, params: any): Promise<any> {
    let context = this;
    return new Promise<any>((resolve, reject) => {
      context
        .isConnected()
        .then(() => {
          api.get(baseUrl + urlPath, params).then((response: any) => {
            if (response.status === 200) {
              resolve(response.data);
            } else {
              if (response.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/login";
              } else reject(response);
            }
          });
        })
        .catch((error) => reject(error));
    }).catch(() => {
      reject({
        message: "The server is not available",
      });
    });
  }
}

export default RestApi;
