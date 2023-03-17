import React from "react"
import {useParams, Link} from "react-router-dom"
import {meals} from "../data"
import {AiOutlineArrowLeft} from 'react-icons/Ai'


export default function RecipeDetails(){
    const {userId} = useParams()
    let pageUrl = "../"

    const recipeRender = meals.map(item => {

        if(item.uuid == userId){
            pageUrl = `/${item.mealType}`
            return (
                <div className="mealBox" key={item.uuid} >
                        <img className="mealImg" src={`../images/${item.image}`}/>
                        <div className="mealDetails">
                            <h4 className="mealType">{item.mealType}</h4>
                            <h3>{item.name}</h3>
                        </div>
                </div>

            )
        }
    })
    
    return (
        <div className="mealDiv">
            <Link 
                to={pageUrl}
                className="flex">
            <AiOutlineArrowLeft />
            <h3>Go back to all meals </h3>
            </Link>
            
            <div className="flex">
                {recipeRender}
            </div>
        </div>
    )
}