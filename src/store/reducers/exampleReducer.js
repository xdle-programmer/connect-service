import {SET_EXAMPLE} from '../types';

const initialState = 'Пример';

export default function (state = initialState, action) {

    switch (action.type) {
        case SET_EXAMPLE:
            return action.payload
        default:
            return state;
    }

}
