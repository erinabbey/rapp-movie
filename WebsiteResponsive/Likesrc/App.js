import React from 'react'
//import Burger from './Hamburger/Burger'
import './App.css'
import Navbar from './WebsiteResponsive/Navbar'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Home from './WebsiteResponsive/Pages/HomePage/Home'
import Footer from './WebsiteResponsive/Pages/Footer/Footer'
import Service from './WebsiteResponsive/Pages/Services/Service';
import Product from './WebsiteResponsive/Pages/Product/Product';
import SignUp from './WebsiteResponsive/Pages/Signup/SignUp';
function App() {

  return (
   <Router>
      <Navbar />
      <Switch>
        <Route path ="/" exact component = {Home} />
        <Route path='/services' component={Service} />
        <Route path='/products' component={Product} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
