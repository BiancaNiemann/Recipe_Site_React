import React from "react"
import RecipeRenderList from "../components/RecipeListRender"

export default function SnacksAndBreads(){

    const pageName = "snackbread"
    const pageTitle = "Snacks and Bread"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle} />
    )
}

