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
import CurrencyConverter from './components/Converter'
import Facebook from './components/Facebook'

import {BrowserRouter as Router, Switch,Redirect,Route} from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
       products:[],
       token:null,
       result :{}


    }
  }

  login = (token,userId)=>{
    this.setState({token:token,userId:userId})
  }
  logout = ()=>{
    this.setState({token:null,userId:null})
  }

  async getProducts(){
    const results = await fetch('http://localhost:5000/products')
    const products = await results.json()
    this.setState({products})
  }
  async getIpAddress(){
    const result = await fetch('https://geoip-db.com/jsonp/')
    this.setState({result:result.json()})
  }

  componentDidMount(){
   this.getProducts()
   this.getIpAddress()
  }


  render(){
    console.log(this.state.result)
    return(
      <React.Fragment>
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

             </Switch>
        </Router>
      </React.Fragment>
      )
  }
}

/*
const App = () => {
  return (
    <div className="App">
      <MainNavBar />
      <SubMainNavbar />
      <CategoryNavbar />
      <CouponNavbar />
     <div className="main">
      <div className="main-content">
      <TopBanner/>
      <HeroCarousel/>
      <Arrivals />
      <PopularProducts />
      <Verdict/>
      <Testimonial/>
      <Footer />
      </div>
     </div>
    </div>
  );
};
*/
export default App;
