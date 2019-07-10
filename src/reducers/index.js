import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //naming a named export as formReducer
import movieReducer from './movieReducer';
import authReducer from './authReducer';
import favoriteReducer from './favoriteReducer';


export default combineReducers ({
    auth: authReducer,
    form: formReducer, //the redux form lib automatically handles action creators, mapstatetoprops, and state management for us. All we have to do is pass our combineReducers func is a reducer labeled as form with the val of reducer which we imported at the top
    movie: movieReducer,
    favorites: favoriteReducer
});