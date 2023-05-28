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
        <ul className="columns is-multiline">
            {movies.map((movie) => (
                <li key={movie.id} className="column is-one-quarter">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image">
                                <img
                                    src={`${imageBaseUrl}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <h2 className="title is-5">{movie.title}</h2>
                            <div className="field">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select
                                            value={selectedCollections[movie.id] || ''}
                                            onChange={(e) =>
                                                handleCollectionSelect(movie.id, e.target.value)
                                            }
                                        >
                                            <option value="">Select Collection</option>
                                            {collections.map((collection) => (
                                                <option key={collection.name} value={collection.name}>
                                                    {collection.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button
                                        className="button is-primary"
                                        onClick={() =>
                                            onAddToCollection(movie, selectedCollections[movie.id])
                                        }
                                    >
                                        Add to Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MovieSearchResults;
