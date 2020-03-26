import React from 'react'

import TopBanner from './TopBanner'
import HeroCarousel from './HeroCarousel'
import Arrivals from './Arrivals'
import PopularProducts from './PopularProducts'
import Verdict from './Verdict'
import Testimonial from './Testimonial'
import Footer from './Footer'

const Home =()=>{
	return(
		<React.Fragment>
			<div className ='main'>
				<div className ='main-content'>
					<TopBanner/>
     				 <HeroCarousel/>
     				 <Arrivals />
     				 <PopularProducts />
     				 <Verdict/>
     				 <Testimonial/>
					  <Footer/>
				</div>
			</div> 

		</React.Fragment>
	)
}

export default Home