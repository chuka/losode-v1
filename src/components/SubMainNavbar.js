import React from 'react';
import  Logo  from '../assets/images/losode_logo.svg';


import '../SCSS/SubMainNavbar.scss';
import SearchInput from './SearchInput';

function displaySideMenu(){
  
}
class SubMainNavbar extends React.Component{
  render() {
    return (
      <div className="sub-flex-container">
        <div className="co pt-4">
      <ul className="flex-container sub-list">
        <li>women</li>
        <li>mens</li>
        <li>health & beauty</li>
      </ul>
     { /*<span onClick={displaySideMenu} className="pl-3 hamburger hide-big pb-4"><Icon type="menu" /></span>*/}
      <div className="mobile-menu-display">
        <span className="float-right font-weight-bold">X</span>
      </div>
    </div> 

    <div className="co">
    {/* <a href=""><Logo className="logo" /></a> */}
    <a href="/"><img className="img-fluid logo" src={Logo} alt="losode logo"/></a>
    </div>

    <div className="co pt-4">
    <span className="hide-small"><SearchInput /></span>
    <div className="icon-mobile hide-big">
      <ul className="flex-icon sub-flex-container">
        <li><ion-icon name="search-outline"></ion-icon></li>
        <li><ion-icon name="person-outline"></ion-icon></li>
      <li><ion-icon name="basket-outline"></ion-icon></li>
      </ul>
    </div> 
    </div>

    </div>
    );
  }
};

export default SubMainNavbar