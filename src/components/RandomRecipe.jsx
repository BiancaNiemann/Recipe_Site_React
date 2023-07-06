import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { meals } from "../data/data"

const RandomRecipe = () => {
    const [randomRecipe, setRandomRecipe] = useState(1)

    useEffect(() => {
        let mealsLength = meals.length
        let randomPick = Math.floor(Math.random() * mealsLength) + 1
        setRandomRecipe(randomPick)
    }, [])

    const recipeRender = meals.map(item => {
        if (item.uuid == randomRecipe) {
            return (
                <Link
                    to={`../${item.uuid}`}
                    key={item.uuid}
                    className="flex flex-col items-center bg-white rounded-xl  shadow-lg hover:shadow-teal-500/50 w-8/12" >
                    <img className="w-full h-96 rounded-t-xl object-cover" src={(item.image)} alt={item.alt} />
                    <div className="text-teal-900 flex flex-col items-center">
                        <h4 className="py-6 font-semibold text-center">meal type: {item.mealType}</h4>
                        <h3 className="py-6 font-extrabold text-center text-4xl w-5/6">{item.name}</h3>
                    </div>
                </Link>
            )
        }
    })

    return (
        <>
            <h3 className="text-center text-3xl py-8 font-bold text-red-400">Random recipe picker</h3>
            {recipeRender}
        </>
    );
}

export default RandomRecipe;