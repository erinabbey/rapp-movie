import React from 'react'

function Recipe({title, calories, image}) {
    return (
        <div>
            <h1>{title} </h1>
            <p>{calories}</p>
            <img src = '' alt = '' />
        </div>
    )
}

export default Recipe
