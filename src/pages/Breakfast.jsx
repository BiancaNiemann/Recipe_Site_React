import React from "react"
import {Link} from "react-router-dom"
import {meals} from "../data"

export default function Breakfast(){

    const recipeRender = meals.map(item => {
        if(item.mealType === "breakfast"){
            return (
                <div className="mealBox" key={item.uuid} >
                    <Link 
                        to={item.id} 
                        key={item.uuid}  
                        style={{ textDecoration: 'none' }}
                    >
                        <img className="mealImg" src={`../images/${item.image}`}/>
                        <div className="mealDetails">
                            <h4 className="mealType">{item.mealType}</h4>
                            <h3>{item.name}</h3>
                        </div>
                    </Link>
                </div>

            )
        }
    })
    
    return (
        <div className="mealDiv">
            <h1>Breakfast Ideas</h1>
            <div className="flex">
                {recipeRender}
            </div>
        </div>
    )
}