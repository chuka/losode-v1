import React from 'react';
import { Button } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
import HeroImage from '../assets/images/hero-new.png';
import PrimaryButton from './PrimaryButton';

import '../SCSS/HeroCarousel.scss';


class HeroCarousel extends React.Component{
  render(){
    return(
      <div className="container heroBan">
              <img src={HeroImage} className="img-fluid" />        
            </div>
    )
  }
}

export default HeroCarousel