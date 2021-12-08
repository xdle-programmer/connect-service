import {GET_USER_NAME} from '../types';

const initialState = {name: 'Юрий', test: 2};

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_USER_NAME:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }

}
