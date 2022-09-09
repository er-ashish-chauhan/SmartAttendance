import {
    LOGIN,
    LOGIN_SUCCESS,
    STORE_TOKEN,
    USER_AUTHENTICATE
} from "../actions/types";

const initialState = {
    authToken: '',
    userData: null,
    fcmToken: null,
    loading: false,
    isAuthenticated: null
};

const authReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            var userdata = null;
            if (action.payload) {
                userdata = {
                   
                }
            }
            return {
                ...state,
                userData: userdata,
                isAuthenticated:  true
            };
        case STORE_TOKEN:
            return {
                ...state,
                fcmToken: action.payload
            }
        case USER_AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return {
                ...state
            };
    }
}

export default authReducer;