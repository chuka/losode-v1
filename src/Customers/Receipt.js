import React from 'react'

const Receipt =()=>{
    return(){
       <div className ='container'>
         <h3>Order Details</h3>
          <p> We've Sent It</p>
          <div className='container-fluid' >
              <p>Estimated Delivery date 12 April 2020</p>
              <div className ='row'>
                  <div className='col-md-6'>
                   ORDER NO:012345
                   ORDER DATE: 12-12-2020
                   SHIPPED ON: 12-12-2020
                  </div>
                  <div className='col-md-6'>
                      <button className ='btn btn-danger'>Help</button>
                      <button className='btn btn-default'>Returns Information</button>
                  </div>
              </div>
          </div>
       </div>
    }
}

export default Receipt