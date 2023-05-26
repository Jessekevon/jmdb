import React from 'react';

const MovieCollection = ({ collection, onRemoveFromCollection, imageBaseUrl }) => {
    return (
        <div>
            <h2>My Collection</h2>
            <ul>
                {collection.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="w-24 h-auto" />
                        <p>{movie.overview}</p>
                        <button onClick={() => onRemoveFromCollection(movie)}>
                            Remove from Collection
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCollection;

