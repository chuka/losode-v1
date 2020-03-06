import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SCSS/App.scss';
import './SCSS/responsiveness.scss'
import MainNavbar from './components/MainNavbar';
import SubMainNavbar from './components/SubMainNavbar';
import CategoryNavbar from './components/CategoryNavbar';
import CouponNavbar from './components/CouponNavbar';
import AuthContext from './Context/AuthContext'
import SignIn from './components/SignIn'
import Customer from './components/Customer'
import Home from './components/Home'
import Admin from './components/Admin'
import Seller from './components/Seller'
import SignUp from './components/SignUp'
import Sale from './components/Sale'
import Inventory from './components/Inventory'
import InventoryList from './components/InventoryList'
import CurrencyConverter from './components/Converter'
import Facebook from './components/Facebook'

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
       superAdminId:null
    }
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
         const results = await fetch('https://geoip-db.com/jsonp')
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
             superAdminLogout:this.superAdminLogout
           }} >
        <Router>
             <MainNavbar/>
             <SubMainNavbar/>
             <CategoryNavbar/>
             <Switch>
               <Route exact path='/' component ={Home}/>
               <Route path ='/admin' component ={Admin}/>
               <Route path ='/login' component ={SignIn}/>
               <Route path ='/signup' component ={SignUp}/>
               <Route path ='/seller' component ={Seller}/>
               <Route path  ='/customer' component ={Customer}/>
               <Route path ='/sale'  component ={Sale}/>
               <Route path ='/converter' component ={CurrencyConverter}/>
               <Route path ='/facebook' component ={Facebook}/>
               <Route path ='/createproduct' component ={Inventory}/>
               <Route path ='/customer/products' component ={InventoryList}/>
             </Switch>
        </Router>
        </AuthContext.Provider>
      </React.Fragment>
      )
  }
  }

export default App;
