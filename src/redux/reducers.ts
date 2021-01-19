import { combineReducers } from "redux"
import {
    BUY_ITEM,
    LOGIN_USER,
    LOGOUT_USER,
    initialItemsState,
    initialUserState
} from "./types"

const itemsReducer = (state = initialItemsState, action: any) => {
    switch (action.type) {
        case BUY_ITEM: return {
            ...state,
            numOfItems: state.numOfItems - 1
        }
        default: return state;
    }
}

const userReducer = (state = initialUserState, action: any) => {
    switch (action.type) {
        case LOGIN_USER: return {
            ...state,
            isLoggedIn: true,
            email: action.payload.email,
            password: action.payload.password
        }
        case LOGOUT_USER: return {
            ...state,
            email: '',
            password: '',
            isLoggedIn: false
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    items: itemsReducer,
    user: userReducer
})
export default rootReducer;
