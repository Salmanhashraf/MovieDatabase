import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FAVORITE':
            return {...state, [action.payload.id]: action.payload };
        case 'FETCH_FAVORITES':
            return {...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
} 