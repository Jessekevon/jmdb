'use client';
'use client';
import React, { useState, useEffect } from 'react';
import { Container, Hero, Section, Columns, Button, Dropdown } from 'react-bulma-components';
import 'bulma/css/bulma.min.css';
import MovieSearch from '../components/MovieSearch';
import MovieCollection from '../components/MovieCollection';
import MovieSearchResults from '../components/MovieSearchResults';

const API_KEY = '3c6589d335c0f9d7f3d59fba6a8ea553';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Fetch movie data and update the state
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, [searchTerm]);

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

  const handleAddToCollection = (movie, collectionName) => {
    const collection = collections.find((c) => c.name === collectionName);
    if (collection && !collection.movies.some((m) => m.id === movie.id)) {
      const updatedCollections = collections.map((c) =>
        c.name === collectionName ? { ...c, movies: [...c.movies, movie] } : c
      );
      setCollections(updatedCollections);
      console.log('Added to collection:', movie);
    } else {
      console.log('Movie already exists in the collection:', movie);
    }
  };

  const handleRemoveFromCollection = (movie, collectionName) => {
    const collection = collections.find((c) => c.name === collectionName);
    if (collection) {
      const updatedMovies = collection.movies.filter((m) => m.id !== movie.id);
      const updatedCollections = collections.map((c) =>
        c.name === collectionName ? { ...c, movies: updatedMovies } : c
      );
      setCollections(updatedCollections);
      console.log('Removed from collection:', movie);
    }
  };

  useEffect(() => {
    const storedCollections = localStorage.getItem('movieCollections');
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    } else {
      setCollections([
        { name: 'Ultra HD 4K', movies: [] },
        { name: 'Blu-ray', movies: [] },
        { name: 'DVD', movies: [] },
        { name: 'VHS', movies: [] },
        { name: 'LaserDisc', movies: [] }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movieCollections', JSON.stringify(collections));
  }, [collections]);

  return (
    <div>
      <Hero color="primary">
        <Hero.Body>
          <Container>
            <h1 className="title">Movie Collection</h1>
            <MovieSearch
              searchTerm={searchTerm}
              onSearchTermChange={setSearchTerm}
              onSearch={handleSearch}
              onClearSearch={handleClearSearch}
            />
          </Container>
        </Hero.Body>
      </Hero>

      <Section>
        <Container>
          <Columns>
            <Columns.Column size={8}>
              {movies && movies.length > 0 ? (
                <MovieSearchResults
                  movies={movies}
                  collections={collections}
                  onAddToCollection={handleAddToCollection}
                  imageBaseUrl={IMAGE_BASE_URL}
                />
              ) : (
                <p className="has-text-grey">No movies found.</p>
              )}
            </Columns.Column>

            <Columns.Column size={4}>
              <MovieCollection
                collections={collections}
                onRemoveFromCollection={handleRemoveFromCollection}
                imageBaseUrl={IMAGE_BASE_URL}
              />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
};

export default IndexPage;

