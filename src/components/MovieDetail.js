import React from 'react';
import { connect } from 'react-redux';

import { addFavorite } from '../actions'

class MovieDetail extends React.Component {

    addToFavorites = () => {
        const favorite = this.props.movieProp;
        this.props.addFavorite(favorite);
    }

    render () {

    
    const divStyle = {
        width: '18rem'
    }
    console.log(this.props);

    if(this.props.movieProp.Type === 'series') {
        return (
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="card" style={divStyle}>
                        <img class="card-img-top" src={this.props.movieProp.Poster} alt={this.props.movieProp.Title}/>
                        <div class="card-body">
                            <h5 className="card-title">{this.props.movieProp.Title}</h5>
                            <p class="card-text">{this.props.movieProp.Plot}</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="card" style={divStyle}>
                        <div className="card-body">
                            <h3 className="card-title">{`Box Office: ${this.props.movieProp.Awards}`}</h3>
                            <h3 className="card-title">{`Released: ${this.props.movieProp.Released}`}</h3>
                            <h3 className="card-title">{`Metascore: ${this.props.movieProp.imdbRating}`}</h3>
                            <h3 className="card-title">{`Runtime: ${this.props.movieProp.Runtime}`}</h3>
                            <h3 className="card-title">{`Genre: ${this.props.movieProp.Genre}`}</h3>
                            <h3 className="card-title">{`Rated: ${this.props.movieProp.Rated}`}</h3>
                            <h3 className="card-title">{`Director: ${this.props.movieProp.Director}`}</h3>
                            <h3 className="card-title">{`Writer: ${this.props.movieProp.Writer}`}</h3>
                            <a 
                                href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${this.props.movieProp.Title}&s=all`} 
                                className="btn btn-primary" 
                                target="_blank"
                                rel="noopener noreferrer">
                                    More Info
                            </a>
                            <button onClick={this.addToFavorites} className="btn btn-primary">Add to Favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="card" style={divStyle}>
                    <img class="card-img-top" src={this.props.movieProp.Poster} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 className="card-title">{this.props.movieProp.Title}</h5>
                        <p class="card-text">{this.props.movieProp.Plot}</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="card" style={divStyle}>
                    <div className="card-body">
                        <h3 className="card-title">{`Box Office: ${this.props.movieProp.BoxOffice}`}</h3>
                        <h3 className="card-title">{`Released: ${this.props.movieProp.Released}`}</h3>
                        <h3 className="card-title">{`Metascore: ${this.props.movieProp.Metascore}`}</h3>
                        <h3 className="card-title">{`Runtime: ${this.props.movieProp.Runtime}`}</h3>
                        <h3 className="card-title">{`Genre: ${this.props.movieProp.Genre}`}</h3>
                        <h3 className="card-title">{`Rated: ${this.props.movieProp.Rated}`}</h3>
                        <h3 className="card-title">{`Director: ${this.props.movieProp.Director}`}</h3>
                        <h3 className="card-title">{`Writer: ${this.props.movieProp.Writer}`}</h3>
                        <a 
                            href={`https://www.imdb.com/find?ref_=nv_sr_fn&q=${this.props.movieProp.Title}&s=all`} 
                            className="btn btn-primary" 
                            target="_blank">
                                More Info
                        </a>
                        <button onClick={this.addToFavorites} className="btn btn-primary">Add to Fav</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
    }
}

export default connect(null, { addFavorite })(MovieDetail);