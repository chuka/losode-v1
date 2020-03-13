import React from 'react'



class OrderItem extends React.Component{
    render(){
        return (
            
            <div className ='container-fluid'>
             <div className='row'>
                 <div className ='col-md-12'>
                    <div className ='row'>
                      <div className = 'col-md-4'>
                        <h3>We've GOT YOUR ORDER</h3>
                        <p>Estimated delivery </p>
                        <p>Item will be shipped in 2 days</p>
                      </div>
                    <div className = 'col-md-4'>
                        <h3>ORDER NO</h3>
                        <p>112345</p>
                     </div>
                    <div className = 'col-md-4'>
                        <h3>ORDER DATE</h3>
                        <p>12-4-2020</p>
                        <button className ='btn btn-primary'>View Order</button>
                     </div>
                     </div>
                 </div> 
            </div>
       </div>

            
        )
    }
}


export default OrderItem 