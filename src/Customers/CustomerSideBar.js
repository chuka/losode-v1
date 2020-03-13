import React from 'react'
import {Link} from 'react-router-dom'


class CustomerSideBar extends React.Component{
      constructor(props){
        super(props)
        this.handleOrders = this.handleOrders.bind(this)
        this.handleDashboard = this.handleDashboard.bind(this)
        this.handleMyReturns = this.handleMyReturns.bind(this)
        this.handleNeedhelp = this.handleNeedhelp.bind(this)
      }

      handleOrders(){
        this.props.handleOrders()
      }

      handleDashboard(){
        this.props.handleDashboard()
      }

      handleMyReturns(){
        this.props.handleMyReturns()
      }

      handleNeedhelp(){
        this.props.handleNeedhelp()
      }
      render(){
        return(
          <div>
          <h4>Image goes here</h4>
          <p>Isaac Orija</p>
          <ul>
           <li onClick ={this.handleDashboard}><Link to ='/customer/dashboard'>dashboard</Link></li>  
           <li onClick ={this.handleOrders}><Link to ='/customer/orders'>Orders</Link></li>  
           <li onClick ={this.handleMyReturns}><Link to ='/customer/returns'>My Returns </Link></li> 
           <li onClick ={this.handleNeedhelp}><Link to ='/customer/help'>Need Help?</Link></li>  
           <li>Sign Out</li> 
          </ul>
      </div>
        )
      }

}


export  default CustomerSideBar