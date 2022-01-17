import React from 'react';

import './search-box.Styles.css';

export const SearchBox = ({placeholder, handleChange}) => {
     return (   <input 
        className='search'
        type = "search"
        placeholder= {placeholder}
        onChange={ handleChange}
        />
     )
}