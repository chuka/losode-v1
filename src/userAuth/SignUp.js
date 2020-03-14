import React from 'react'
import {Link} from 'react-router-dom'
import  Logo  from '../assets/images/losode_logo.svg';

class SignUp extends React.Component{
   constructor(props){
		super(props)
		this.state ={
			email:'',
			name:'',
			password:'',
			confirm_password:'',
      phone:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e){
		this.setState({[e.target.name]:e.target.value})
	}

	handleSubmit(e){
		e.preventDefault()
		//console.log(this.state)
		const payload = {name:this.state.name,email:this.state.email,password:this.state.password,phone:this.state.phone}
		
	     
		fetch('http://localhost:5000/users/register',{
			method:'POST',
            headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
               },
              body:JSON.stringify(payload)
		})
		.then(res=>console.log(res))

		this.setState(
			{
				email:'',
				firstname:'',
        lastname:'',
				password:'',
				confirm_password:'',
        phone :''
	       }
	       )
		alert('Account Created')// for testing purposes only
		
   }
	

  	render(){

		return(
           <div className ='container'>

<a href="/"><img className="mx-auto d-block img-fluid logo" src={Logo} alt="losode logo"/></a>
           
         <form onSubmit ={this.handleSubmit}>
             <h2 className="text-center bold">Create your Account </h2>
              <p className="text-center">Registration is easy</p>
             <div className ='d-flex justify-content-center form-group inline'>
              <label>
                First Name
                <input type ='text' 
                className ='form-control'
                 placeholder ='First name'
                  name ='firstname'
                   onChange ={this.handleChange}
                   value ={this.state.firstname}
                   />
              </label>  
              <label>
                Last Name
                <input type ='text' 
                className ='form-control'
                 placeholder ='Last Name'
                  name ='lastname'
                   onChange ={this.handleChange}
                   value ={this.state.lastname}
                   />
              </label>

         	</div>
         	<div className ='d-flex justify-content-center form-group'>
              <label>
              Email
                <input type ='email'
                 className ='form-control'
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
               Password
                <input type ='password'
                 className ='form-control' 
                 placeholder ='Password'
                  name ='password'
                   onChange ={this.handleChange}
                   value ={this.state.password}
                   />
              </label>  
         	</div>
         	<div className ='d-flex justify-content-center form-group'>
              <label>
               Confirm Password
                <input type ='password'
                 className ='input-form form-control'
                  placeholder =' confirm Password'
                   name ='confirm_password'
                    onChange ={this.handleChange}
                    value ={this.state.confirm_password}
                    />
              </label>  
         	</div>

         	 {this.state.firstname !== '' && this.state.lastname !=='' && this.state.email !== ''  &&  this.state.password !== '' && this.state.password === this.state.confirm_password && <button className ='btn btn-primary'>submit</button>}
           <h5>OR</h5>
            
             <p><Link to ='/facebook'>facebook login</Link> &nbsp;&nbsp;<Link to ='/google'>google login</Link></p>
            
         </form>
        
     </div>
		)
	}
	
}

export default SignUp