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
    
     editProduct(id,brandName,quantity,price,productName){
     	const payload ={
     		brandName:brandName,
     		quantity:quantity,
     		price:price,
     		productName:productName
     	}

     	//Write Code to send the data to Losode's Api and update the product with the given Id
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