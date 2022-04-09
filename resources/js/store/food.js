import { SET_FOOD } from "./types/foodTypes";

const initialState = null;

const food = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FOOD:
            return payload;
        default:
            return state;
    }
};

export default food;