import React from 'react';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions';

class MovieFavorites extends React.Component {

    componentDidMount() {
        this.props.fetchFavorites(); 
        console.log(this.props);
        console.log(this.props.favorites);
    }

    componentDidUpdate() {
        console.log(this.props.favorites);
        console.log(this.props.currentUserId);
        console.log(this.filterFavorites());
    }

    filterFavorites() {
        return this.props.favorites.filter((favorite) => {
            return favorite.userId === this.props.currentUserId;
        });
    }

    filterFavoritess() {
        return this.props.favorites.filter((favorite) => {
            return favorite.userId.includes(this.props.currentUserId);
        });
    }

    renderFavorites() {
        const divStyle = {
            width: '18rem'
        }
        const filteredFavorites = this.filterFavorites();

        if (this.props.isSignedIn) {
            return filteredFavorites.map((favorite) => {
                return (
                <div className="col-md-4 col-sm-12">
                    <div className="card" style={divStyle}>
                        <img className="card-img-top" src={favorite.Poster} alt={favorite.Title}/>
                        <div className="card-body">
                        <h5 className="card-title">{favorite.Title}</h5>
                        </div>
                    </div>
                </div>
                );
            });
        }
        return <div><p>You must sign in to see your favorites </p></div>
    }

    render() {

        if(!this.props.favorites) {
            return <div>loading...</div>
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderFavorites()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { favorites: Object.values(state.favorites), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { fetchFavorites })(MovieFavorites);

