import React from 'react'

const CartItem  = (props)=>{
    return(
      <React.Fragment>
        <div className='col-md-9 col-lg-9'>
         Cart Product Item
        </div>
        <div className='col-md-3 col-lg-3'>
            Cart Product and delivery Cost
        </div>
      </React.Fragment>
    )
}

export default CartItem