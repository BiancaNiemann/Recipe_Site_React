import React from "react"
import RecipeRenderList from "../components/RecipeListRender"

export default function Soups() {

    const pageName = "soup"
    const pageTitle = "Soup"

    return (
        <RecipeRenderList pageName={pageName} pageTitle={pageTitle} />
    )
}



