import {BUY_ICECREAM} from './iceCreamTypes'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return initialState
    }
}

export default iceCreamReducer