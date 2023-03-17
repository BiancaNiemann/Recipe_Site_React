import React from "react"
import {Link} from "react-router-dom"
import {meals} from "../data"
import {AiOutlineArrowLeft} from 'react-icons/Ai'

export default function Salad(){

    const recipeRender = meals.map(item => {
        if(item.mealType === "salad"){
            return (
                <div className="mealBox" key={item.uuid} >
                    <Link 
                        to={`../${item.uuid}`} 
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
            <h1>Salad Ideas</h1>
            <Link 
                to="../"
                className="flex">
                <AiOutlineArrowLeft />
                <h3>Go back Home </h3>
            </Link>
            <div className="flex">
                {recipeRender}
            </div>
        </div>
    )
}