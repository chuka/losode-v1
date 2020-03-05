import React from 'react';
import { FaSearch } from 'react-icons/fa';

import '../SCSS/SearchInput.scss';

export default () => (
  <div className="search">
    <FaSearch className="search__icon" />
    <input type="search" className="search__input" placeholder="What are you looking for?" />
  </div>
);
