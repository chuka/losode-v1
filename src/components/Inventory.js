import React from 'react'

class Inventory extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			brandName :'',
			quantity:0,
		    unitPrice:0,
		    productImage:null,
		    productName:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.createProduct  = this.createProduct.bind(this)
		this.handleFileChange = this.handleFileChange.bind(this)
	}

	handleChange(e){
     this.setState({[e.target.name]:e.target.value})
	}
	createProduct(e){
		e.preventDefault()

		const products ={
			brandName : this.state.brandName,
			quantity:this.state.quantity,
			price:this.state.price,
			productName:this.state.productName
		}

		const formData = new formData()

		for(let key of Object.keys(this.state.productImage)){
			formData.append('product images',this.state.productImage[key])
		}

		formData.append('products',products)

       
     this.setState({
     	brandName:'',
     	quantity:0,
     	price:0,
     	productName:'',
     	productImage:null
     })

      fetch('https://path/to/api',{method:'POST',body:formData})
      .then(response=>response.json())
      .then(success=>alert('Successfully Saved to the Database'))
      .catch(err=>alert('Something happened, Unable to save to the Database'))
		
	}

	
	handleFileChange(e){
		this.setState({productImage:this.state.productImage})
	}


	render(){
		return(
			<React.Fragment>
                 
                <div className ='container'>
                <h4>Create a new product Line</h4>
                  <form onSubmit ={this.createProduct}>
  					 <div className ='form-group'>
                   <label>
                    Product Name
                    <input type ='text'
                    className ='form-control'
                      placeholder ='Product Name'
                       name ='productName'
                        onChange ={this.handleChange}
                        value ={this.state.productName}
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
                        value ={this.state.unitPrice}
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
                        value ={this.state.quantity}
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
                        value ={this.state.brandName}
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
                     <button className='btn btn-primary'>Add Product</button>
                  </form>
                </div>
			</React.Fragment>
			)
	}
}

export default Inventory 
