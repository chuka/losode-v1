import React from 'react'
import axios from 'axios'


class CurrencyConverter extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			currencies:[],
			result :null,
			toCurrency:'GBP',
			fromCurrency:'USD',
			amount:1
		}
		this.handleConversion = this.handleConversion.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.selectHandler = this.selectHandler.bind(this)
	}

	handleChange(e){
		this.setState({amount:e.target.value})
	}

	async getCurrencies(){
		try{
			 const results = await fetch('https://api.openrates.io/latest')
		     const currencyResults = await results.json()
			const currencyArr = ['EUR']
			const data = currencyResults.rates
			const keys = Object.keys(data)
			const currencies =[...currencyArr,...keys]
			this.setState({currencies})
		}catch(err){
			alert('unable to fetch Currencies ',err.message)
		}
    	
	}

	 async handleConversion(e){
	 	e.preventDefault()

       if(this.state.fromCurrency !== this.state.toCurrency){
       	try{
          const data = await fetch(`https://api.openrates.io/latest?base${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
       	    const result = await data.json()
       	    this.setState({result:result['rates'][this.state.toCurrency]})
       	  }catch(err){
       	  	alert('unable to process conversion ',err.message)
       	  }
          
       }
       else{
       	this.setState({result:'You cant convert the same currency'})
       }
	}

	selectHandler(e){
	 this.setState({[e.target.name]:e.target.value})
      
	}

	

	async componentDidMount(){
	  this.getCurrencies()
	}

	render(){
		console.log('currencies :',this.state.currencies)
		console.log('result : ', this.state.result)

		
		return(
  			 <React.Fragment>
  			 <div className='container'>

  			        <h2>currency converter</h2>
  			           
                       <form onSubmit ={this.handleConversion}>
  			           <div className ='form-group'>
  			             <input type='number' value ={this.state.amount}
  			              name ='amount'
  			               onChange={this.handleChange}
  			               className='form-control'
  			               min ='1'
  			               />
  			           </div>
         	          
         	          <div className ='form-group'>
         	           <select
         	              name = 'fromCurrency'
         	            onChange ={this.selectHandler}
         	             value = {this.state.fromCurrency}
         	              className='form-control'>
	         	        {this.state.currencies.map(currency=>(<option key ={currency} value ={currency}>{currency}</option>))}
         	           </select>
         	           </div>

         	           <div className ='form-group'>
         	           <select
         	           name ='toCurrency'
         	            onChange ={this.selectHandler}
         	             value = {this.state.toCurrency}
         	              className='form-control'>
	         	        {this.state.currencies.map(currency=>(<option key ={currency} value ={currency}>{currency}</option>))}
         	           </select>
         	           </div>
         	           <button className ='btn btn-primary btn-lg'>Convert</button>
         	           </form>
                    <div className='container'>{this.state.result && <h3>{this.state.result}</h3>}</div>
   
                </div>

              
          			 </React.Fragment>
			)
	}
}

export default CurrencyConverter