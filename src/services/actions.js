import Axios from "./Auth";
import Auth from "./Auth"
export const getAction = (params,id) => {
    return new Promise((resolve, reject) => {
        Auth.get(params+`/${id}`)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const getActions = (params) => {
    return new Promise((resolve, reject) => {
        Auth.get(params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const updateAction = (params,id,body) => {
    return new Promise((resolve, reject) => {
        Auth.put(params+`/${id}`,body)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const patchAction = (params,id,body) => {
    return new Promise((resolve, reject) => {
        Auth.patch(params+`/${id}`,body)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const createAction = (params,body) => {
    return new Promise((resolve, reject) => {
        
        //console.log(body);
        Auth.post(params,body)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                /* console.log(error); */
                reject(error.response);
            });
    });
};
