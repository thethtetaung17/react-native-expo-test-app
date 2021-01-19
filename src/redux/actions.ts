import { BUY_ITEM, LOGIN_USER, LOGOUT_USER } from './types';

export const buyItem = () => {
    return {
        type: BUY_ITEM
    }
}

export const login = (user: any) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}
