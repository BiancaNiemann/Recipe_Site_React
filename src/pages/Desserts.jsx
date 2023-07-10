import React from "react"
import RecipeRenderList from "../components/RecipeListRender"

export default function Dessert() {

    const pageName = "dessert"
    const pageTitle = "Dessert"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle} />
    )
}



