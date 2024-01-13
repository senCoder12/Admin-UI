import React, { useState } from 'react';
import '../CSS/searchBox.css';

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search by name, email or role..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
};

export default SearchBox;
