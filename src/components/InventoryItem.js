import React from 'react'

class InventoryItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			onEdit = false
		}
		this.deleteProduct = this.deleteProduct.bind(this)
		this.editProduct = this.editProduct.bind(this)
		this.handleEdit = this.handleEdit.bind(this)

	}

	handleEdit(){
	  this.setState({onEdit:!this.state.onEdit})
	  }

	  deleteProduct(){
	  	this.props.deleteProduct(this.props.product.id)
	  }

	  editProduct(){
	  	console.log('product edited')
	  }


	
	render(){
		return(
			<React.Fragment>
				seller Item Component
			</React.Fragment>
			)
	}
}

export default InventoryItem