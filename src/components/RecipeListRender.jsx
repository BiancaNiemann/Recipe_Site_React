import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { meals } from "../data/data"
import IsVege from "./IsVege"

export default function RecipeRenderList({pageName, pageTitle}) {

    const location = useLocation()

    const [isVege, setIsVege] = useState(false)
    
     useEffect(()=> {
        
        setIsVege(prevState => !prevState)

     }, [location])

    const recipeRender = meals.map(item => {
        if(isVege === false || isVege === undefined) {
            if (item.mealType === pageName) {
                return (
                    <div className="bg-white rounded-md h-80 px-4 pt-4" key={item.uuid} >
                        <Link
                            to={`../${item.uuid}`}
                            key={item.uuid}
                            style={{ textDecoration: 'none' }}
                        >
                            <img className="w-60 h-40 rounded-md object-cover" src={(item.image)} alt={item.alt} />
                            <div>
                                <h3 className="text-teal-900 font-bold px-4 w-60 pt-8 text-center text-xl">{item.name}</h3>
                            </div>
                        </Link>
                    </div>
                )
            }
        } else if(isVege === true) {
            if (item.mealType === pageName && item.isVege === true) {
                return (
                    <div className="bg-white rounded-md h-80 px-4 pt-4" key={item.uuid} >
                        <Link
                            to={`../${item.uuid}`}
                            key={item.uuid}
                            style={{ textDecoration: 'none' }}
                        >
                            <img className="w-60 h-40 rounded-md object-cover" src={(item.image)} alt={item.alt} />
                            <div>
                                <h3 className="text-teal-900 font-bold px-4 w-60 pt-8 text-center text-xl">{item.name}</h3>
                            </div>
                        </Link>
                    </div>
                )
            }
        }
        
    })

    return (
        <div className="main pt-8 px-10">
            <Link
                to="../"
                className="flex pl-8">

                <h3 className="text-white pl-2 font-semibold">
                    <i className="fa-solid fa-arrow-left mr-4"
                        style={{ color: "#ffffff" }}
                    ></i>
                    Go back Home </h3>
            </Link>
            <IsVege />
            <h1 className=" text-5xl pt-2 pb-8 font-bold text-red-400 text-center">{pageTitle} Recipes</h1>
            <div className="flex justify-center gap-10 flex-wrap">
                {recipeRender}
            </div>


        </div>
    )
}
