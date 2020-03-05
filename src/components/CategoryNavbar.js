import React from 'react';
import {Link} from 'react-router-dom'

import '../SCSS/CategoryNavbar.scss';
export default () => {
  return (
    <div className="categoryNav hide-small">
      <ul>
        <li><Link to ='/sale' >sale</Link></li>
        <li>new in</li>
        <li>dresses</li>
        <li>accessories</li>
        <li>coats & jackets</li>
        <li>health & beauty</li>
        <li>bottoms</li>
        <li>kimonos</li>
        <li>footwears</li>
      </ul>
    </div>
  )
}