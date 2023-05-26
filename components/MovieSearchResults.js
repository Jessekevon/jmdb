'use client';
import React from 'react';

const MovieSearchResults = ({ movies, onAddToCollection, imageBaseUrl }) => {
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="w-24 h-auto" />
                        <p>{movie.overview}</p>
                        <button onClick={() => onAddToCollection(movie)}>
                            Add to Collection
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieSearchResults;
