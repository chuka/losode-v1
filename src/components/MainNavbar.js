import React from 'react';
import { FaFlag } from 'react-icons/fa';
// import { FaHeart} from 'react-icons/fa';
// import { FaUser} from 'react-icons/fa';
// import {FaCartPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';


import '../SCSS/MainNavbar.scss';
// import { Container } from 'react-bootstrap/lib/Tab';

class MainNavbar extends React.Component{
  render() {
    return (
     <div className="container-fluid bg-black pt-3">
       <div className="row justify-content-between main-menu">
    <div className="col-4 far-right">
    Are you a fashion designer? Join our Marketplace
    </div>
    <div className="col-4">
    <div className="flex-container">
   <div> Hey <Link to ='/login'>Sign In</Link> OR <Link to ='/signup'>Join Us </Link></div>                            
    <div>	&#x20A6;</div>
    <div>
    <ul className="flex-container">
      <li><ion-icon name="heart-outline"></ion-icon></li>
      <li><ion-icon name="person-outline"></ion-icon></li>
      <li><ion-icon name="basket-outline"></ion-icon></li>
    </ul>
    </div>
    </div>
    </div>
     </div>
     <div className="mobile-main">
       <p className="text-center">Are you a fashion designer? Join our Marketplace</p>
     </div>
     </div>
    );
  }
};

export default MainNavbar

// export default () => (
//   <div className="main">
//     <p>
//       Are you a fashion designer? Join our{' '}
//       <Link to="/signup" style={{ color: '#fff' }}>
//         Marketplace
//       </Link>
//     </p>
//     <div className="main__group">
//       <p>
//         Hey, <Link style={{ color: '#fff' }}>Sign In</Link> OR{' '}
//         <Link style={{ color: '#fff' }}>Join Us</Link>
//       </p>
//       <span className="main__group__icon">
//         <ul>
//           <li>
//             <FaFlag />
//           </li>
//           {/* <li>
//             <FaHeart />
//           </li>
//           <li>
//             <FaUser />
//           </li>
//           <li>
//             <FaCartPlus />
//           </li> */}
//         </ul>
//       </span>
//     </div>
//   </div>
// );


