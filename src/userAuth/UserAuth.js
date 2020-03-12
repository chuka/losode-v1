import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Footer from '../components/Footer'

import '../userAuth/UserAuth.scss';
class UserAuth extends React.Component{
	constructor(props){
		super(props)
		this.state ={
           signUpClicked:false
           
		}
		this.handleSignInAuth = this.handleSignInAuth.bind(this)
		this.handleSignUpAuth = this.handleSignUpAuth.bind(this)
	}

	handleSignInAuth(){
		this.setState({signUpClicked:!this.state.signUpClicked})
	}
	handleSignUpAuth(){
		this.setState({signUpClicked:!this.state.signUpClicked})
	}

	render(){

		const result = this.state.signUpClicked ? <SignUp/> : <SignIn/>
		return(
			<React.Fragment>

			  <div className ="container-fluid auth">
				<div className="row tall-row">
					<div className="col-lg-6 red">

					</div>

					<div className="pt-4 d-flex  col-lg-6 justify-content-center">
					<span className="formCol">
					<p><button className='btn btn-primary' onClick ={this.handleSignInAuth}>New To Losode</button>
                     <button className='btn btn-primary' onClick ={this.handleSignUpAuth}>Already Registered</button>
			         </p>

					 {result}</span>
					</div>

					</div>			  

			  </div>

			      

<Footer/>
			</React.Fragment>
		   )
	}
}

export default UserAuth