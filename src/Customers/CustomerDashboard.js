import React from 'react'
import MyOrders from './Orders'
import WelcomeHeader from './WelcomeHeader'
import CustomerSideBar from './CustomerSideBar'
import CustomerDetails from './CustomerDetails'
import RecommendedProducts from  '../components/RecommendedProducts'
import {BrowserRouter as Router} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'
import Returns from './Returns'


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
				<AuthContext.Consumer>
				<Router>
				   <CustomerSideBar/>
				   <WelcomeHeader/>
				</Router>	
				   { (data) => {
					     if(this.state.myreturnsClicked === true ){
                           return <Returns userId ={data.userId}/>
						 }

						 if(this.state.ordersClicked ===true){
							return <MyOrders userId ={data.userId}/>
						 }
						 if(this.state.dashboardClicked===true){
							return <CustomerDetails userId={data.userId}/>
						 }

				   }
				   
				   }				     

					{/* {this.state.myreturnsClicked && <Returns userId={data.userId}/>} */} 
				</AuthContext.Consumer>
				
			</React.Fragment>
			)
	}
}
export default CustomerDashBoard