import React from 'react'

import '../SCSS/SubMainNavbar.scss'
import   '../SCSS/Arrivals.scss'
class Arrivals extends React.Component{
    render(){
        return(
            <div className="contain">
                <div className="arrival-container">
                    <div className="col-s men">
                       <a href="" className="but">SHOP MEN</a>
                    </div>
                    <div className="col-s pt-4 hide-small">
                        <ul className="arrivee">
                            <li><u>NEW ARRIVALS</u></li>
                            <li>SHIRTS</li>
                            <li>DRESSES</li>
                            <li>BAGS & PURSES</li>
                            <li>HEALTH & BEAUTY</li>
                        </ul>
                    </div>
                    <div className="col-s women">
                    <a href="" className="but">SHOP WOMEN</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arrivals