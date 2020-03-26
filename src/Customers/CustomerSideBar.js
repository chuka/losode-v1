import React from 'react'
import {Link} from 'react-router-dom'

import './Customers.scss'
class CustomerSideBar extends React.Component{
      constructor(props){
        super(props)
        
        this.handleOrders = this.handleOrders.bind(this)
        this.handleDashboard = this.handleDashboard.bind(this)
        this.handleMyReturns = this.handleMyReturns.bind(this)
        this.handleNeedhelp = this.handleNeedhelp.bind(this)
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
     handleOrders(){
      this.props.handleOrders()
     }
     
      render(){
        return(
          <div class="d-flex justify-content-center">
          
          <ul class="sidebar-menu">
          <p class="">Welcome Isaac Orija</p>
           <li onClick ={this.handleDashboard}><Link to ='/customer/dashboard'>Dashboard</Link></li>  
           <li onClick ={this.handleOrders}><Link to ='/customer/dashboard/orders'>Orders</Link></li>  
           <li onClick ={this.handleMyReturns}><Link to ='/customer/dashboard/returns'>My Returns </Link></li> 
           <li onClick ={this.handleNeedhelp}><Link to ='/customer/dashboard/help'>Need Help?</Link></li>  
           <li><Link>Sign Out</Link></li> 
          </ul>
      </div>
        )
      }

}


export  default CustomerSideBar