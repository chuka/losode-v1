import React from 'react'
import OrderItem from './OrderItem'

class MyOrders extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            myOrders:[]
        }
    }
    render(){
        return(
            <React.Fragment>
               <OrderItem/>
               <OrderItem/>
               <OrderItem/>
                <OrderItem/>
            </React.Fragment>
        )
    }
}
export default MyOrders 
