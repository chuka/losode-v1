import React from 'react'
import WelcomeHeader from './WelcomeHeader'
import CustomerSideBar from './CustomerSideBar'
import CustomerDetails from './CustomerDetails'
import RecommendedProducts from  '../components/RecommendedProducts'

class Customer extends React.Component{
	constructor(props){ 
		super(props)
		this.state = {
			customerDetail:[]
		}
	}

	

	
	render(){

		return(
			<React.Fragment>
				<div className ='container-fluid'>
			      <div className ='row'>
                    <div className='col-md-3 col-lg-3'>
			           <CustomerSideBar/>
					</div>
					<div className='col-md-9 col-lg-9'>
					  <WelcomeHeader/>
					  <CustomerDetails/>
					  <RecommendedProducts/>
					</div>
				  </div> {/* End of row class */}
				</div> {/*End of container-fluid class */}
			</React.Fragment>
			)
	}
}
export default Customer