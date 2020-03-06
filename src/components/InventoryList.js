import React from 'react'
import InventoryItem from './InventoryItem'

class InventoryList extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			products:[]
		}
		
		this.deleteProduct = this.deleteProduct.bind(this)
		this.updateProduct = this.updateProduct.bind(this)
		this.editProduct = this.editProduct.bind(this)
	}

	deleteProduct(id){
		const filteredProduct = this.state.products.filter(product=> product.id !== id)
		this.setState({products:filteredProduct})
	}
    
     updateProduct(){
     	console.log('updating product')
     }

	getProducts(){
	  console.log('fetching products ........')
	}
	componentDidMount(){
		this.getProducts()
	}
	render(){
		return(
			<React.Fragment>
			  Hello from the Inventory List
			</React.Fragment>
		)
	}
}

export default InventoryList