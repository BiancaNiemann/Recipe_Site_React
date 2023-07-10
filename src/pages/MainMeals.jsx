import React from "react"
import RecipeRenderList from "../components/RecipeListRender"


export default function MainMeals() {

    const pageName = "main"
    const pageTitle = "Main Meal"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle}/>
    )
}

