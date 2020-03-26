import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SCSS/App.scss';
import './SCSS/responsiveness.scss'
import SellerDashboard from './Seller/SellerDashboard'
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
import AboutLosode from './components/AboutLosode'
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
       cartItems:[]
       
    }
  }
   setCart =(value)=>{
     if(localStorage){
       localStorage.setItem('items',JSON.stringify(value))
     }
   }

   getCart(){
     if(localStorage && localStorage.getItem('items')){
      return JSON.parse(localStorage.getItem('items'))
     }
     return []
   }
  


  addToCart =(product)=>{
     const alreadyInCart = this.state.cartItems.findIndex(item=>item.id===product.id)
     if(alreadyInCart ===-1){
       const updatedItems = this.state.cartItems.concat({...product,quantity:1})
     }
     else{
       const updatedItems = [...this.state.cartItems]
       updatedItems[alreadyInCart].quantity += 1
       this.setState({cartItems:updatedItems},()=>this.setCart(updatedItems))
     }
  }

  

  increaseQuantity =(product) =>{
    const updatedItems = this.state.cartItems
    const index = updatedItems.indexOf(product)
    updatedItems[index].quantity++
    this.setState({cartItems:updatedItems},()=>this.setCart(updatedItems))
    
  }

  decreaseQuantity =(product) =>{
    const updatedItems = this.state.cartItems
    const index = updatedItems.indexOf(product)
    if(updatedItems[index].quantity > 1){
        updatedItems[index].quantity--
        this.setState({cartItems:updatedItems}, ()=>this.setCart(updatedItems))
    }
  }

  removeFromCart = (product) =>{
    const cartItems = this.state.cartItems
    const filteredCart = cartItems.filter(item =>item.id !==product.id)
    this.setState({cartItems:filteredCart},()=>this.setCart(filteredCart))
   
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
      console.log('Unable to fetch Ip location')
    }
   
  }
  


  componentDidMount(){
   this.getProducts()
   this.getIpAddress()
   this.setState({cartItems:this.getCart()})
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
               <Route path='/aboutlosode' component={AboutLosode}/>
             </Switch>
        </Router>
        </AuthContext.Provider>
      </React.Fragment>
      )
  }
  }

export default App;
