import React from 'react'
import {Link} from 'react-router-dom'

const CustomerSideBar  = ()=>{
  return(
      <React.Fragment>
          <h4>Image goes here</h4>
          <p>Isaac Orija</p>
          <ul>
           <li><Link to ='/customer/dashboard'>dashboard</Link></li>  
           <li><Link to ='/customer/orders'>Orders</Link></li>  
           <li><Link to ='/customer/return'>My Returns </Link></li> 
           <li><Link to ='/help'>Need Help?</Link></li>  
           <li>Sign Out</li>  
          </ul>
      </React.Fragment>
  )
}


export  default CustomerSideBar