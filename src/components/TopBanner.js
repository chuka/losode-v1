import React from 'react';
import TopBannerImage from '../assets/images/top-banner.png';


import '../SCSS/TopBanner.scss';
class TopBanner extends React.Component{
    render(){
        return(
            <div className="container topBan">
               <img src={TopBannerImage} className="img-fluid"/>
            </div>
        )
    }
}

export default TopBanner;