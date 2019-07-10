import OMDb from '../apis/OMDb';
import favorites from '../apis/favorites';
import history from '../components/history';


export const fetchMovies = (formValue) => async (dispatch) => {
    const response = await OMDb.get(`/?apikey=${process.env.API_KEY}=${formValue.title}`);

    dispatch ({type: 'FETCH_MOVIES', payload: response.data});
    console.log(response.data);
    console.log(formValue);

}

export const signIn = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const addFavorite = (favorite) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await favorites.post('/favorites', {...favorite, userId});

    dispatch({type: 'ADD_FAVORITE', payload: response.data});
    history.push('/favorites');

}

export const fetchFavorites = () => async (dispatch) => {
    const response = await favorites.get('/favorites');

    dispatch({type: 'FETCH_FAVORITES', payload: response.data});
}

 