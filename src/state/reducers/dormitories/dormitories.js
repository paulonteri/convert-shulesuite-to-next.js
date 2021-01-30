import {
    GET_DORMS,
    // ADD_DORM,
    // DELETE_DORM
} from "../../actions/dormitories/types";

const initialState = { dormitories: [] };

export default function Dorms(state = initialState, action) {
    switch (action.type) {
        case GET_DORMS:
            return {
                ...state,
                dormitories: action.payload,
            };
        default:
            return state;
    }
}
