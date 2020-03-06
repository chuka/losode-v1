import React from 'react'
import InventoryItem from './InventoryItem'

class InventoryList extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			products:[]
		}
		
		this.deleteProduct = this.deleteProduct.bind(this)
		
		this.editProduct = this.editProduct.bind(this)
	}


	deleteProduct(id){
		const filteredProduct = this.state.products.filter(product=> product.id !== id)
		this.setState({products:filteredProduct})
	}
    
     editProduct(){
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
			  <InventoryItem/>
			</React.Fragment>
		)
	}
}

export default InventoryList