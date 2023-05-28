'use client';
import React from 'react';

const MovieSearch = ({ searchTerm, onSearchTermChange, onSearch, onClearSearch }) => {
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={onSearch}>
          Search
        </button>
      </div>
      <div className="control">
        <button className="button is-light" onClick={onClearSearch}>
          Clear Search
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;

