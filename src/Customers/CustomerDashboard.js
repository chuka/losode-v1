import React from 'react'
import CustomerHelp from './CustomerHelp'
import MyOrders from './Orders'
import WelcomeHeader from './WelcomeHeader'
import CustomerSideBar from './CustomerSideBar'
import CustomerDetails from './CustomerDetails'
import RecommendedProducts from  '../components/RecommendedProducts'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import MyReturns from './Returns'


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
				<CustomerSideBar 
				handleDashboard={this.handleDashboard}
				 handleMyReturns ={this.handleMyReturns}
				 handleNeedhelp = {this.handleNeedhelp}
				 handleOrders ={this.handleOrders}
				/>
				<WelcomeHeader/>
				Hello from the dashboard
				<AuthContext.Consumer>
				 {(data)=>this.state.myreturnsClicked ?<MyReturns/>:this.state.ordersClicked ?<MyOrders/>:this.state.dashboardClicked?<CustomerDetails/>:this.state.needHelpClicked?<CustomerHelp/>:''}
				 
				</AuthContext.Consumer>
			
			</React.Fragment>
		)
	}
}
export default CustomerDashBoard