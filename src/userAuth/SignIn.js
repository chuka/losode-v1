import React from 'react'
import AuthContext from '../Context/AuthContext'
import {Link} from 'react-router-dom'
import  Logo  from '../assets/images/losode_logo.svg';

import '../userAuth/UserAuth.scss';
class SignIn extends React.Component{
	static contextType = AuthContext
   constructor(props){
   	super(props)
   	this.state ={
   		email:'',
   		password:'',
   		isLogin:true
   	}
 
   	this.handleSubmit = this.handleSubmit.bind(this)
   	this.handleChange = this.handleChange.bind(this)
   }


handleChange(e){
 this.setState({[e.target.name]:e.target.value})
}


handleSubmit(e){
	e.preventDefault()
	const payload ={
		email:this.state.email,
		password:this.state.password
	}
	
	fetch('http://localhost:5000/users/login',{
			method:'POST',
            headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
               },
              body:JSON.stringify(payload)
		})
		.then(res=>res.json())
    .then(result=> {
      console.log(result.user._id)
      if(result.user_token){
     this.context.login(result.user_token,result.user._id)
    }
  }).catch(err=>console.log(err))

		this.setState(
			{
     			email:'',
				password:''	
	     }
	     )
	
	alert('Authenticated')
}

render(){
	return(
 <React.Fragment>
   <div className ='container'>

           <a href="/"><img className="mx-auto d-block img-fluid logo" src={Logo} alt="losode logo"/></a>
         <form onSubmit ={this.handleSubmit}>
           <h4 className="text-center">Sign In </h4>
           <p className="text-center">Sign in with Email</p>
             
          <div className='d-flex justify-content-center form-group'>
              <label>
              Email:
                <input type ='email'
                 className ='input-form form-control'
                  placeholder ='Email'
                   name ='email'

                    onChange ={this.handleChange}
                    value ={this.state.email}
                    required
                    />
              </label>  
          </div>

          <div className ='d-flex justify-content-center form-group'>
              <label>
               Password:
                <input type ='password'
                className ='input-form form-control'
                 placeholder ='password'
                  name ='password'
                   onChange ={this.handleChange}
                   value ={this.state.password}
                   />
              </label>  

          </div>
           <div className="d-flex  justify-content-center signButton">
           {this.state.email !=='' && this.state.password.length >= 6 &&<button className='btn btn-primary'>Login</button>}
           </div>
            {/* <h5>OR</h5>
           <p><Link to ='/facebook'>facebook login</Link> &nbsp;&nbsp;<Link to ='/google'>google login</Link></p> */}
          </form>
        </div>
 </React.Fragment>
	)
}
}

export default SignIn