'use client';
import React from 'react';

const MovieCollection = ({ collections, onRemoveFromCollection, imageBaseUrl }) => {
    return (
        <div>
            <h2>My Collection</h2>
            {collections.map((collection) => (
                <div key={collection.name}>
                    <h3>{collection.name}</h3>
                    <ul>
                        {collection.movies.map((movie) => (
                            <li key={movie.id}>
                                <h3>{movie.title}</h3>
                                <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="w-24 h-auto" />
                                {/* <p>{movie.overview}</p> */}
                                <button onClick={() => onRemoveFromCollection(movie, collection.name)}>
                                    Remove from Collection
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default MovieCollection;

