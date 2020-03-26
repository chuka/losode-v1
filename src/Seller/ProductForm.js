import React from 'react'

class SingleProductForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            product_name:null,
            product_description:null,
            product_type: null,
            price:null,
            sale_price:0,
            sale_start_date:null,
            sale_end_date :null,
            quantity:0,
            sku:null,
            sizes:['XL','XXL','S','XS','M','L'],
            size:'S',
            colors:['red','black','blue','white','grey'],
            color:'red',
            toggle:false

        }
        this.handleChange = this.handleChange.bind(this)
        this.selecthandler = this.selecthandler.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name:e.target.value]})
    }

    selecthandler(e){
        this.setState({[e.target.name:e.target.value]})
    }

    render(){
        return(
            <React.Fragment>
                <div className ='container-fluid'>
                   <div className='row'>
                      <div className ='col-md-9 '>
                        <form>
                            <div className='form-group'>
                                <label>
                                    Product Name 
                                   <input type ='text'
                                    placeholder ='product name ' 
                                    className='form-control'
                                     name='product_name'
                                     onChange ={this.handleChange}/>        
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                 Product Description
                                    <input type ='text'
                                     placeholder ='description' 
                                     className='form-control' 
                                     name='product_description'
                                     onChange ={this.handleChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                             <label>
                             product type
                              <input type ='text'
                               placeholder ='product type'
                               className ='form-control'
                                name ='product_type'
                                 onChange ={this.handleChange}/>
                             </label>
                            </div>
                            <div className='container'>
                              <p>Does this product have a variant ?</p>
                            <div className ='form-group'>
                             <select name ='color'
                              value ={this.state.color}
                              onChange ={this.selecthandler}  
                             >
                             {this.state.colors.map(color=>(<option key ={color} value ={color}>{color}</option>))}
                             </select>
                            </div>
                            <div className ='form-group'>
                              <select name ='size'
                               value ={this.state.size}
                                onChange ={this.selecthandler}  
                            >
                            {this.state.sizes.map(size=>(<option key ={size} value ={size}>{size}</option>))}
                            </select>
                           </div>
                            
                            </div>

                        </form>
                      </div>
                      <div className='col-md-3'>

                      </div>
                   </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductForm