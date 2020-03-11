import React from 'react'

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
                My Order Component
            </React.Fragment>
        )
    }
}
export default MyOrders 
