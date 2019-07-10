
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}
export default (state = INITIAL_STATE, action) => { //default state value
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, isSignedIn: true, userId: action.payload }; //returning new obj with updated state values
        case "SIGN_OUT":
            return {...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}