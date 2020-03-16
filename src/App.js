import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SCSS/App.scss';
import './SCSS/responsiveness.scss'
import CustomerDashboard from'./Customers/CustomerDashboard'
import MainNavbar from './components/MainNavbar';
import SubMainNavbar from './components/SubMainNavbar';
import CategoryNavbar from './components/CategoryNavbar';
import CouponNavbar from './components/CouponNavbar';
import AuthContext from './Context/AuthContext'
import Home from './components/Home'
import Admin from './components/Admin'
import UserAuth from './userAuth/UserAuth'
import Sale from './components/Sale'
import MyOrders from './Customers/Orders'
import MyReturns from './Customers/Returns'
import CreateProduct from './components/Inventory'
import InventoryList from './components/Inventory'
import CurrencyConverter from './components/Converter'
import Facebook from './components/Facebook'
import Cart from './components/Cart'
import CustomerHelp from './Customers/CustomerHelp.js'


import {BrowserRouter as Router, Switch,Redirect,Route} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       products:[],
       userToken:null,
       userId:null,
       IpResult :{},
       sellerToken:null,
       sellerId:null,
       adminToken:null,
       superAdminToken:null,
       adminId:null,
       superAdminId:null,
       cart:[]
       
    }
  }

  
    addToCart(product){
      this.setState(prevState=>{
      const newCart = prevState.cart
      let productAlreadyInCart = false;
      newCart.forEach(item =>{
        if(item.id ===product.id){
          item.quantity++
          localStorage.setItem('cart', JSON.stringify(newCart))
          productAlreadyInCart = true
        }
      })
  
      if(!productAlreadyInCart){
        newCart = [...newCart,{...product,quantity:1}]
        localStorage.setItem('cart',JSON.stringify(newCart))
      }
      return{cart:JSON.parse(localStorage.getItem('cart'))}
     })
      
    }
  

  increaseQuantity =(product) =>{
    const cartItems = this.state.cart
    const index = cartItems.indexOf(product)
    cartItems[index].quantity++
    localStorage.setItem('cart',JSON.parse(cartItems))
    this.setState({cart:JSON.parse(localStorage.getItem('cart')||[])})
  }

  decreaseQuantity =(product) =>{
    const cartItems = this.state.cart
    const index = cartItems.indexOf(product)
    if(cartItems[index].quantity > 1){
        cartItems[index].quantity--
        localStorage.setItem('cart', JSON.parse(cartItems))
        this.setState({cart:JSON.parse(localStorage.getItem('cart')||[])})
    }
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cart
    const filteredCart = cartItems.filter(item =>item.id !==product.id)
    localStorage.setItem('cart',JSON.parse(filteredCart))
    this.setState({cart:JSON.parse(localStorage.getItem('cart')||[])})
  }


  userlogin = (token,userId)=>{
    this.setState({userToken:token,userId:userId})
  }

  userlogout = ()=> this.setState({userToken:null,userId:null})


  sellerLogin = (sellerToken,sellerId) =>{
   this.setState({sellerToken:sellerToken, sellerId:sellerId})
  }

  sellerLogout =()=> this.setState({sellerToken:null,sellerId:null})

  adminLogin = (adminToken,adminId)=>{
    this.setState({adminToken:adminToken,adminId:adminId})
  }

  adminLogin = ()=> this.setState({adminToken:null,adminId:null})
  

  superAdminLogin = (superAdminId,superAdminToken)=>{
   this.setState({superAdminToken:superAdminToken,superAdminId:superAdminId})
  }

  superAdminLogout = ()=> this.setState({superAdminToken:null,superAdminId:null})
  

  async getProducts(){
    const results = await fetch('http://localhost:5000/products')
    const products = await results.json()
    this.setState({products})
  }
  async getIpAddress(){
    try{
         const results = await fetch('https://cors-anywhere.herokuapp.com/https://geoip-db.com/jsonp')
        const jsonResult = await results.json()
        this.setState({result:jsonResult})
    }
    catch(err){
      alert('Unable to fetch Ip location')
    }
   
  }
  


  componentDidMount(){
   this.getProducts()
   this.getIpAddress()
  }


  render(){
    console.log('IP result ', this.state.result)
    return(
      <React.Fragment>
       <AuthContext.Provider  value ={{userToken:this.state.userToken, 
          userId:this.state.userId,
           sellerToken:this.state.sellerToken,
            sellerId:this.state.sellerId,
            adminId:this.state.adminId, 
            adminToken:this.state.adminToken, 
            superAdminId:this.state.superAdminId, 
            superAdminToken:this.state.superAdminToken,
             userLogin:this.userLogin,
             sellerLogin:this.sellerLogin,
             adminLogin:this.adminLogin,
             superAdminLogin:this.superAdminLogin,
             userLogout:this.userLogout,
             sellerLogout:this.sellerLogout,
             adminLogout:this.sellerLogout,
             superAdminLogout:this.superAdminLogout,
             cart:[]
            
           }} >
        <Router>
             <MainNavbar/>
             <SubMainNavbar/>
             <CategoryNavbar/>
             <Switch>
               <Route exact path='/' component ={Home}/>
               <Route path ='/admin' component ={Admin}/>
               <Route path ='/user-auth' component ={UserAuth}/>
               <Route path ='/sale'  component ={Sale}/>
               <Route path ='/converter' component ={CurrencyConverter}/>
               <Route path ='/facebook' component ={Facebook}/>
               <Route path ='/createproduct' component ={CreateProduct}/>
               <Route path ='/seller/products' component ={InventoryList}/>
               <Route path = '/customer/dashboard' component ={CustomerDashboard}/>
               <Route path ='/cart' component ={Cart}/>
               <Route path ='/customer/dashboard/orders' component ={MyOrders}/>
               <Route path ='/customer/dashboard/returns' component ={MyReturns}/>
               <Route path ='/customer/dashboard/help' component ={CustomerHelp}/>
             </Switch>
        </Router>
        </AuthContext.Provider>
      </React.Fragment>
      )
  }
  }

export default App;
