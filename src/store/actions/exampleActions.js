import {SET_EXAMPLE} from '../types';

export const setExample = (data) => dispatch => {
    dispatch({
        type: SET_EXAMPLE,
        payload: data
    });
};
