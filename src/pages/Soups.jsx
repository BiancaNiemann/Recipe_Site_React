import React from "react"
import { Link } from "react-router-dom"
import { meals } from "../data/data"
//import { AiOutlineArrowLeft } from 'react-icons/Ai'

export default function Soups() {

    const recipeRender = meals.map(item => {
        if (item.mealType === "soup") {
            return (
                <div className="bg-white rounded-md h-80 px-4 pt-4" key={item.uuid} >
                    <Link
                        to={`../${item.uuid}`}
                        key={item.uuid}
                        style={{ textDecoration: 'none' }}
                    >
                        <img className="w-60 h-40 rounded-md object-cover" src={`../images/${item.image}`} />
                        <h3 className="text-teal-900 font-bold px-4 w-60 pt-8 text-center text-xl">{item.name}</h3>
                    </Link>
                </div>

            )
        }
    })

    return (
        <div className="main pt-8 px-10">
            <Link
                to="../"
                className="flex">
                
                <h3 className="text-white pl-2 font-semibold">Go back Home </h3>
            </Link>
            <h1 className=" text-5xl pt-2 pb-8 font-bold text-red-400 text-center">Soup Recipes</h1>
            <div className="flex justify-center gap-10 flex-wrap">
                {recipeRender}
            </div>
        </div>
    )
}

//<AiOutlineArrowLeft className="text-white " />

