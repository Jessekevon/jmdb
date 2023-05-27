'use client';
import React, { useState } from 'react';

const MovieSearchResults = ({
    movies,
    onAddToCollection,
    imageBaseUrl,
    collections,
    onCollectionSelect,
}) => {
    const [selectedCollections, setSelectedCollections] = useState({});

    const handleCollectionSelect = (movieId, collection) => {
        setSelectedCollections((prevSelectedCollections) => ({
            ...prevSelectedCollections,
            [movieId]: collection,
        }));
    };

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    {/* <p>{movie.overview}</p> */}
                    <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />

                    <select
                        value={selectedCollections[movie.id] || ''}
                        onChange={(e) => handleCollectionSelect(movie.id, e.target.value)}
                    >
                        <option value="">Select Collection</option>
                        {collections.map((collection) => (
                            <option key={collection.name} value={collection.name}>
                                {collection.name}
                            </option>
                        ))}
                    </select>

                    <button onClick={() => onAddToCollection(movie, selectedCollections[movie.id])}>
                        Add to Collection
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default MovieSearchResults;
