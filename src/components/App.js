import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import MovieShow from './MovieShow';
import MovieFavorites from './MovieFavorites';
import history from './history';


const App = () => {

    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path='/' exact component={MovieShow} />
                    <Route path='/favorites' exact component={MovieFavorites} />
                </div>
            </Router>
        </div>
    );
}

export default App;