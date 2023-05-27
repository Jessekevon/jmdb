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
            <button
                onClick={onSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Search
            </button>
            <button
                onClick={onClearSearch}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
                Clear Search
            </button>
        </div>
    );
};

export default MovieSearch;
