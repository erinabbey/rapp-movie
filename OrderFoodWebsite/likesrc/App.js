
import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyle'
import Feature from './OrderFoodWebsite/Feature'
import Footer from './OrderFoodWebsite/Footer'
import Hero from './OrderFoodWebsite/Hero'
import Products from './OrderFoodWebsite/Products'
import { productsData, productsData2 } from './OrderFoodWebsite/Products/data'

function App(){
       return(
         <Router>
           <GlobalStyle />
           <Hero/>
           <Products data  ={productsData} heading= 'Our products' />
           <Feature />
           <Products data  ={productsData2} heading= 'Sweet cake' />
           <Footer />
        </Router>
        
       )
}
  export default App


