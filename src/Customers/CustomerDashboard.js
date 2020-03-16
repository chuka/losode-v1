import React from 'react'
import CustomerHelp from './CustomerHelp'
import MyOrders from './Orders'
import CustomerDetails from './CustomerDetails'
import RecommendedProducts from  '../components/RecommendedProducts'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import MyReturns from './Returns'
import {Link} from 'react-router-dom'
import CustomerSideBar from './CustomerSideBar'


class CustomerDashBoard extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			ordersclicked :false,
			dashboardClicked :true,
			myreturnsClicked :false,
			needHelpClicked:false
		  }
		    
		  this.handleOrders = this.handleOrders.bind(this)
		  this.handleDashboard = this.handleDashboard.bind(this)
		  this.handleMyReturns = this.handleMyReturns.bind(this)
		  this.handleNeedhelp = this.handleNeedhelp.bind(this)
	}
	handleOrders(){
        this.setState({
          dashboardClicked:false,
           myreturnsClicked:false,
          needHelpClicked:false,
          ordersclicked:true
        })
      }
    
      handleDashboard(){
        this.setState({
          dashboardClicked:true,
          myreturnsClicked:false,
          needHelpClicked:false,
          ordersClicked:false
        })
      }
    
      handleMyReturns(){
           this.setState({
           dashboardClicked:false,
           myreturnsClicked:true,
           needHelpClicked:false,
           ordersClicked:false
        })
      }
    
      handleNeedhelp(){
        this.setState({
          dashboardClicked:false,
           myreturnsClicked:false,
           ordersClicked:false,
           needHelpClicked:true
        })
      }
	
	render(){
        
		return(
			<React.Fragment>
				<CustomerSideBar handleDashboard={this.handleDashboard} handleMyReturns={this.handleMyReturns} handleNeedhelp={this.handleNeedhelp} handleOrders= {this.handleOrders}/>
				<p>Welcome User</p>
				
			 <AuthContext.Consumer>
				 {(data)=>{
					 if(this.state.myreturnsClicked){
						 return(
							<MyReturns/>
						 )
					 }
					 if(this.state.ordersClicked){
						return(
							<MyOrders/>
						)
					 }
					 if(this.state.dashboardClicked){
						return(
						<CustomerDetails/>
						)
					 }
					 if( this.state.needHelpClicked){
						 return(
							<CustomerHelp/>
						 )
					 }
					}	 
	         }
				 
				</AuthContext.Consumer>
			
			</React.Fragment>
		)
	}
}
export default CustomerDashBoard
