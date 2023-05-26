import React from "react"
import { useParams, Link } from "react-router-dom"
import { meals } from "../data/data"
//import {AiOutlineArrowLeft} from 'react-icons/Ai'


export default function RecipeDetails() {
    const { userId } = useParams()
    let pageUrl = "../"

    const recipeRender = meals.map(item => {

        if (item.uuid == userId) {
            let ingredients = item.ingredients.map(item => {
                return (
                    <li className="mb-4" key={item}>{item}</li>
                )
            })
            let instructions = item.instructions.map(item => {
                return (
                    <li className="mb-2 list-decimal" key={item} >{item}</li>
                )
            })

            let notes = item.notes.map(item => {
                    return (
                        <li className="mb-4" key={item}>{item}</li>
                    )
                })
            
            pageUrl = `/${item.mealType}`
            return (
                <div className="mealBox flex flex-col items-center text-center text-white w-11/12" key={item.uuid} >
                    <img className="mealImg w-96 h-72 rounded-2xl object-cover mb-6" src={(item.image)} alt={item.alt} />
                    <div className="mealDetails lg:w-8/12 ">
                        <h4 className="mealType text-sm">Meal Type: {item.mealType}</h4>
                        <h3 className="text-5xl text-red-400 mb-6">{item.name}</h3>
                        <div className="bg-white pb-6 pt-6 rounded-2xl">
                            <h5 className="text-2xl mb-6 text-red-400 font-semibold">Ingredients</h5>
                            <p className="text-left ml-5 lg:ml-24 mb-6 text-teal-900">{ingredients}</p>
                            <h5 className="text-2xl mb-6 text-red-400 font-semibold">Instructions</h5>
                            <p className="text-left ml-5 lg:ml-16 mr-16 text-teal-900">{instructions}</p>
                            <h5 className="text-2xl mb-6 text-red-400 font-semibold">Notes</h5>
                            <p className="text-left ml-5 lg:ml-16 mr-16 text-teal-900">{notes}</p>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="main">
            <Link
                to={pageUrl}
                className="flex pt-4 pl-4">
                <h3 className="text-white">
                    <i className="fa-solid fa-arrow-left mr-4" 
                        style={{color: "#ffffff"}}
                    >
                    </i>
                    Go back to meals list
                </h3>
            </Link>

            <div className="flex flex-col items-center">
                {recipeRender}
            </div>
        </div>
    )
}

//<AiOutlineArrowLeft />