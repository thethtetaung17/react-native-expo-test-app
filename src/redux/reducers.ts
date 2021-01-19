import { BUY_ITEM } from "./types"

const initialState = {
    numOfItems: 20
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case BUY_ITEM: return {
            ...state,
            numOfItems: state.numOfItems - 1
        }
        default: return state;
    }
}

export default reducer;
