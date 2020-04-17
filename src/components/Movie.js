import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';


function Movie({ id, title, year, summary, posterURL, rating, genres}) {
    return (
        <div className="movie">
            <Link to={{
                pathname: `movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    posterURL,
                    rating,
                    genres
                }
            }}>
                <img src={posterURL} alt={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_summary">{summary}</p>
                    
                    <ul className="movie_genres">{genres.map((genre, index) => (<li key={index} className="genre">{genre}</li>))}</ul>
                </div>
            </Link>
        </div> 
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;