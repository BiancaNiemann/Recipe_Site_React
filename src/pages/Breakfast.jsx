import React from "react"
import RecipeRenderList from "../components/RecipeListRender"

export default function Breakfast() {

    const pageName = "breakfast"
    const pageTitle = "Breakfast"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle} />
    )
}