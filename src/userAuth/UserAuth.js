import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
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

			  <div className ='container'>
			      
                     <p><button className='btn btn-primary' onClick ={this.handleSignInAuth}>New To Losode</button>
                     <button className='btn btn-primary' onClick ={this.handleSignUpAuth}>Already Registered</button>
			         </p>
			  </div>

			      {result}


			</React.Fragment>
		   )
	}
}

export default UserAuth