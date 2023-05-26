'use client';
import React from 'react';

const MovieSearch = ({ searchTerm, onSearchTermChange, onSearch, onClearSearch }) => {
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchTermChange(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
            <button onClick={onClearSearch}>Clear Search</button>
        </div>
    );
};

export default MovieSearch;
