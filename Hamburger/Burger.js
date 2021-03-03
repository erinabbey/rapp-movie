import React, {Component} from 'react'
import '../Hamburger/Burger.css'
 
 export default class Burger extends Component {
     state = {
         letture: 0,
         tomato: 0,
         cheese: 0,
         meat: 0
     }
     render(){
    return (
        <>
        <div className = "burgerIngredients">
            Burger
        </div>

        <div className = "ingredientsblock">
        <p>Ingredients</p>
        <div className = "Ingrebtn">
        <button className = "ingreButton" onClick= {()=> this.addRemoveIngre('add', 'letture')}>Add</button>
        <button className = "ingreButton" onClick= {()=> this.addRemoveIngre('remove', 'letture')}>Remove</button>
        </div>
        </div>
        </>
    )
}
}

