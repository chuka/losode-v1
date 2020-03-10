import React from 'react'

class Customer extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className='container-fluid'>
				   <div className ='row'>
					   <div className ='col-md-3 col-lg-3'>
                         <div className='container'>
							<h4>Image Goes Here</h4>
							<button className='btn btn-primary'>Dashboard</button>
							<ul>
								<li>My Orders</li>
								<li>My Returns</li>
								<li>Need Help</li>
								<li>Sign Out</li>
							</ul>
						 </div>
					   </div>

					   <div className='col-md-9 col-lg-9'>
						  <div className='container'>
							  <h4>Dear Isaac Welcome to your Account</h4>
						        <div className='row'>
									<div className='col-md-6 col-lg-6'>
										<h3>Account Details    <span>edit</span></h3>
										 <p>Isaac orija </p>
										 <p>Isaac.Orija@gmail.com</p>
										 <p>090817766545</p>
									</div>
									<div className='col-md-6 col-lg-6'>
                                       <h4>Address</h4>
									    <p>Your default Shipping Address </p>
										 <p>House 1 Jagaban Street</p>
										 <p>Amuwo odofin</p>
										 <p>090817766545</p>
									</div>
								</div>
							  

						  </div>
					   </div>
				   </div>
				   <div className='container'>
				   <div className='row'>
				     <div className ='col-md-4 col-lg-4'>
						 <h2>Recommended Product</h2>
			           <h4>product Image goes here</h4>
					   <p>product name </p>
					   <p>Product Size</p>
					   <p>Review</p>
					   <p>Price</p>
					 </div>

					 <div className ='col-md-4 col-lg-4'>
						 <h2>Recommended Product</h2>
			           <h4>product Image goes here</h4>
					   <p>product name </p>
					   <p>Product Size</p>
					   <p>Review</p>
					   <p>Price</p>
					 </div>

				   </div>
				   </div>
				</div>
			</React.Fragment>
			)
	}
}
export default Customer