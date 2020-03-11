import React from 'react'
import CartItem from './CartItem'
import RecommendedProducts from './RecommendedProducts'
class Cart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
               <div className='container-fluid'>
                  <div className='row'>
                       <CartItem/>
                  </div>
                  <RecommendedProducts/>
               </div>
            </React.Fragment>
        )
    }
}
export default Cart