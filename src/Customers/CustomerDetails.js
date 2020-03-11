import React from 'react'

class CustomerDetails extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            editAccount:false,
            editAddress:false
        }
        this.submitEditedAccount = this.submitEditedAccount.bind(this)
        this.submitEditedAddress = this.submitEditedAddress.bind(this)
        this.handleEditAccount = this.handleEditAccount.bind(this)
        this.handleEditAddress = this.handleEditAddress.bind(this)

    }
    handleEditAccount(){
        this.setState({editAccount:!this.state.editAccount})
    }

    handleEditAddress(){
        this.setState({editAddress:!this.state.editAddress})
    }
    submitEditedAccount(e){
        e.preventdefault()
        alert('Customer Account edited')
    }

    submitEditedAddress(e){
      e.preventdefault()
      alert('customer Address edited')
    }
    render(){
       
        return(
            <React.Fragment>
               <div className ='row'>
                   <div className='col-md-6 col-lg-6'>
                     Account Details Go Here
                   </div>

                   <div className='col-md-6 col-lg-6'>
                       Shipping Address goes here
                   </div>
               </div>
            </React.Fragment>
        )

    }
}

export default CustomerDetails