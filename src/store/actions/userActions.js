import {GET_USER_NAME} from '../types';

export const getUserName = () => dispatch => {
    dispatch({
        type: GET_USER_NAME,
        payload: 'Ник!'
    });
};
