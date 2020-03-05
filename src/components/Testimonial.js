import React from 'react'

import { Carousel } from 'antd';

import '../SCSS/Testimonial.scss'

class Testimonial extends React.Component{
   
    render(){
        return(
            <div className="container mtop pt-4">
                <h3 className="text-center">WHAT OUR BUYERS ARE SAYING</h3>
                <Carousel autoplay>
            <div>
              <p>Losode.com is excited and the first of its kind from Africa! It is Urban & Afrocentric.</p>
              <p>Isaac Orija</p>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
            </div>
        )
    }
}

export default Testimonial