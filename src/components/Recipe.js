import React from 'react'
import IngredientList from './IngredientList';
import '../css/recipe.css'


export default function Recipe(props) {
    const { 
        name,
        cookTime, 
        serving, 
        instructions,
        ingredients
    } = props;
    return (
    <div className='container'>
        <div className='header'>
            <h3>{name}</h3>
            <div>
                <button className='btn edit'>Edit</button>
                <button className='btn delete'>Delete</button>
            </div>
        </div>
        <div className='cookTime'>
            <span className='title'>Cook time:</span>
            <span >{cookTime}</span>
        </div>
        <div>
            <span className='title'>Serving:</span>
            <span>{serving}</span>
        </div>
        <div>
            <span className='title'>Instructions:</span>
            <div>{instructions}</div>
        </div>
        <div>
            <span className='title'>Ingredients:</span>
            <div><IngredientList ingredients={ingredients}/></div>
        </div>
    </div>
  )
}
