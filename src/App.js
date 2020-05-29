import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList'
import Details from './components/Details'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'
import Default from './components/Default'
import Section from './components/Section'

import {Switch, Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
     <React.Fragment>
       <Navbar />
       <Switch> 
        <Route exact path = "/" component = {ProductsList} /> 
        <Route exact path = "/products/:id" component = {Section} /> 
        <Route path = "/details/:id" component ={Details} /> 
        <Route path = "/cart" component ={Cart} /> 
        <Route path = "/add" component ={AddProduct} /> 
        <Route component ={Default} /> 
       </Switch>
     </React.Fragment>
     
    )
  }
}

export default App;
