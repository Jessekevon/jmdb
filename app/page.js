'use client';
import React, { useState, useEffect } from 'react';
import MovieSearch from '../components/MovieSearch';
import MovieCollection from '../components/MovieCollection';
import MovieSearchResults from '../components/MovieSearchResults';

const API_KEY = '3c6589d335c0f9d7f3d59fba6a8ea553';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    const storedCollection = localStorage.getItem('movieCollection');
    if (storedCollection) {
      setCollection(JSON.parse(storedCollection));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movieCollection', JSON.stringify(collection));
  }, [collection]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      setMovies(data.results);
    } else {
      setMovies([]);
    }
  };

  const handleClearSearch = () => {
    setMovies([]);
    setSearchTerm('');
  };

  const handleAddToCollection = (movie) => {
    const isInCollection = collection.find((item) => item.id === movie.id);
    if (!isInCollection) {
      setCollection((prevCollection) => [...prevCollection, movie]);
      console.log('Added to collection:', movie);
    } else {
      console.log('Movie already exists in the collection:', movie);
    }
  };

  const handleRemoveFromCollection = (movie) => {
    setCollection((prevCollection) =>
      prevCollection.filter((item) => item.id !== movie.id)
    );
    console.log('Removed from collection:', movie);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Movie Collection</h1>
      <MovieSearch
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
      {movies && movies.length > 0 ? (
        <MovieSearchResults
          movies={movies}
          onAddToCollection={handleAddToCollection}
          imageBaseUrl={IMAGE_BASE_URL}
        />
      ) : (
        <p className="text-gray-500">No movies found.</p>
      )}
      <MovieCollection
        collection={collection}
        onRemoveFromCollection={handleRemoveFromCollection}
      />
    </div>
  );
};

export default IndexPage;
