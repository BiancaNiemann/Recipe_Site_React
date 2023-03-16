import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"


export default function RecipeDetails(){
    const params = useParams()
    console.log(params)
    return (
        <h1>details go here</h1>
    )
}