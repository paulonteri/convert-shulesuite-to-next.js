import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    // REGISTER_FAIL,
    // REGISTER_SUCCESS
    CHECK_CACHED_AUTH
} from "../../actions/auth/types";

const initialState = {
    token:
        typeof window !== "undefined" ? sessionStorage.getItem("token") : null,
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function Authentication(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            if (typeof window !== "undefined") {
                sessionStorage.setItem("token", action.payload.token);
            }
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };

        case CHECK_CACHED_AUTH:
            if (typeof window !== "undefined") {
                if (Boolean(sessionStorage.getItem("token"))) {
                    return {
                        ...state,
                        isAuthenticated: true,
                        isLoading: false
                    };
                } else {
                    return {
                        ...state,
                        token: null,
                        user: null,
                        isAuthenticated: false,
                        isLoading: false
                    };
                }
            }
            //
            return {
                ...state
            };

        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            if (typeof window !== "undefined") {
                sessionStorage.removeItem("token");
            }
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return state;
    }
}
