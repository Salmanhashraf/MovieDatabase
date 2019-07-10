export default (state = [], action) => {
    const data = action.payload;
    switch(action.type) {
        case 'FETCH_MOVIES':
            return  {...state,  data } ;
        default: 
            return state;
    }
}