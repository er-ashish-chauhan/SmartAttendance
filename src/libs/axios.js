import axios from "axios";
import {
    baseURL
} from "../utils/apiUrls";

const defaulHeader = {
    headers: {
        "content-type": "application/json",
    }
};

const instance = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    defaulHeader,
});

const requestWithoutAuth = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    defaulHeader,
});

export const postRequestWithAuth = async ({
    API = "",
    DATA = {},
    HEADER = {},
    PAYLOAD
}) => {
    var accessToken = "";
    // accessToken = await getDataFromStorage("accessToken");
    HEADER = {
        "Authorization": "Bearer " + accessToken
    }
    return new Promise((resolve, reject) => {
        axios.post(
            API,
            DATA,
            {
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            }
        )
            .then(result => {
                // console.log("Result -> Post API >>", result);
                resolve(result);
            })
            .catch(error => {
                // console.log("Error -> Post API >>", error)
                resolve(error);
            });
    });
};

export const postRequestNoAuth = ({
    API = "",
    DATA = {},
    HEADER = {},
    PAYLOAD
}) => {
    return new Promise((resolve, reject) => {
        requestWithoutAuth
            .post(API, DATA, {
                ...(PAYLOAD ? PAYLOAD : { ...defaulHeader.headers, ...HEADER })
            })
            .then(result => {
                // console.log("Result -> Post API No Auth >>", result);
                resolve(result);
            })
            .catch(error => {
                // console.log("Error -> Post API No Auth >>", error);
                resolve(error.response);
            });
    });
};

export const putRequestNoAuth = ({
    API = "",
    DATA = {},
    HEADER = {},
    PAYLOAD
}) => {
    return new Promise((resolve, reject) => {
        requestWithoutAuth
            .put(API, DATA, {
                ...(PAYLOAD ? PAYLOAD : { ...defaulHeader.headers, ...HEADER })
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                resolve(error.response);
            });
    });
};

export const putRequestWithAuth = async ({
    API = "",
    DATA = {},
    HEADER = {},
    PAYLOAD
}) => {
    var accessToken = "";
    // accessToken = await getDataFromStorage("accessToken");

    HEADER = {
        "Authorization": "Bearer " + accessToken
    }
    return new Promise((resolve, reject) => {
        requestWithoutAuth
            .put(API, DATA, {
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + accessToken
                }
            })
            .then(result => {
                // console.log("Result -> Put API >>", result);
                resolve(result);
            })
            .catch(error => {
                // console.log("Error -> Put API >>", error);
                resolve(error.response);
            });
    });
};


export const updateAuthToken = (token = '') => {
    instance.defaults.headers = {
        ...instance.defaults.headers,
        ...{ Authorization: token }
    };
};

export const getRequest = async ({
    API = "",
    headers = {},
    params = {},
    data = {}
}) => {
    var accessToken = "";
    // accessToken = await getDataFromStorage("accessToken");

    headers = {
        "Authorization": "Bearer " + accessToken,
        "content-type": "application/json"
    }

    return new Promise((resolve, reject) => {
        instance
            .get(apiWithAuth(API), {
                headers: headers
            })
            .then(result => {
                // console.log("Result -> GET API >>", result);
                resolve(result);
            })
            .catch(error => {
                // console.log("Error -> GET API >>", error);
                resolve(error.response);
            });
    });
};

export const postRequestWithParams = ({
    API = "",
    headers = {},
    params = {},
    data = {}
}) => {
    return new Promise((resolve, reject) => {
        instance
            .post(apiWithAuth(API), {
                ...defaulHeader.headers,
                params,
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                resolve(error.response);
            });
    });
};

export const apiWithAuth = api => {
    return api;
};

export const getRequestNoAuth = ({
    API = "",
    DATA = {},
    HEADER = {},
    PAYLOAD
}) => {
    return new Promise((resolve, reject) => {
        requestWithoutAuth
            .get(apiWithAuth(API), {
                headers: HEADER
            })
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                resolve(error.response);
            });
    });
};
