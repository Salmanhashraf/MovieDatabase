import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import MovieForm from './MovieForm';
import MovieDetail from './MovieDetail';

class MovieShow extends React.Component {

    onSubmit = (formValue) => { //call our action creator with our form values when the form is submitted

        this.props.fetchMovies(formValue);
    }

    componentDidUpdate() { //Checking if movie prop updated with search value
        console.log(this.props);
    }

    renderMovieDetail() {
        if (this.props.movie) {
            return <MovieDetail movieProp={this.props.movie} />
        }
    }

    render() {
        return (
            <div className="container-fluid">
                OMDb Movies
                <br/>
                <h3>Search a Movie</h3>
                <MovieForm onSubmit={this.onSubmit} />
                <br/>
                {this.renderMovieDetail()}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {movie: state.movie.data};
}


export default connect(mapStateToProps, {fetchMovies} )(MovieShow);