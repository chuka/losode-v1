import React from 'react'

class InventoryItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			onEdit:false,
			brandName:this.props.brandName,
			quantity:this.props.quantity,
			price:this.props.price,
			productName:this.props.productName

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
				{
					this.state.onEdit ?
					( 
					<div className ='container'>
						<form onSubmit ={this.editProduct}>
						    <div className ='form-group'>
                          <label>
                            Product Name
                          <input type ='text'
                            className ='form-control'
                            placeholder ='Product Name'
                           name ='productName'
                           onChange ={this.handleChange}
                           value ={this.props.product.productName}
                        />
                      </label>  
                          </div>

                          <div className ='form-group'>
                             <label>
                            Unit Price
                             <input type ='Number'
                             className ='form-control'
                            placeholder ='Unit Price'
                              name ='unitPrice'
                              onChange ={this.handleChange}
                              value ={this.props.product.unitPrice}
                               min ='0'
                               />
                            </label>  
                         </div>

                  		<div className ='form-group'>
                   		 <label>
                    		quantity
                    		<input type ='Number'
                     		 className ='form-control'
                      		placeholder ='Unit Price'
                       		name ='quantity'
                        	onChange ={this.handleChange}
                        	value ={this.props.product.quantity}
                        	min ='0'
                   			 />
                 		</label>  
                 		 </div>

                 		 <div className ='form-group'>
                        <label>
                          Brand Name
                         <input type ='text'
                           className ='form-control'
                         placeholder ='Brand Name'
                           name ='brandName'
                           onChange ={this.handleChange}
                         value ={this.props.product.brandName}
                          />
                    </label>  
                    </div>
                    <div className ='form-group'>
                      <label>
                        Product Image
                        <input type ='file'
                        className ='form-control'
                         placeholder ='Unit Price'
                          name ='productImage'
                           onChange ={this.handleFileChange}
                           multiple 
                           /> 
                      </label>  
                     </div>
                     <button className='btn btn-primary'>Update Product</button>
						</form>
					</div>
					) :
					(
					  <div className='container'>
					      <h4>Product information goes into this component</h4>
					   </div>
					)
				}
			</React.Fragment>
			)
	}
}

export default InventoryItem