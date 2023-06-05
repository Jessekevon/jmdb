'use client';
import React from 'react';
const MovieCollection = ({ collections, onRemoveFromCollection, imageBaseUrl }) => { 
  return (
    <div>
      <h2 className="title is-3">My Collection</h2>
      {collections.map((collection) => (
        <div key={collection.name} className="mb-6">
          <h3 className="title is-4">{collection.name}</h3>
          <ul className="columns is-multiline">
            {collection.movies.map((movie) => (
              <li key={movie.id} className="column is-one-quarter">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-6">{movie.title}</p>
                    {/* <p className="subtitle is-7">{movie.overview}</p> */}
                    <button
                      className="button is-danger is-small"
                      onClick={() => onRemoveFromCollection(movie, collection.name)}
                    >
                      Remove from Collection
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieCollection;


