import React from "react"
import RecipeRenderList from "../components/RecipeListRender"

export default function Salad() {

    const pageName = "salad"
    const pageTitle = "Salad"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle} />
    )
}

