import React from "react"
import { meals } from "../data"
import {AiOutlineArrowLeft} from 'react-icons/Ai'

export default function Home(){
    let mealsLength = meals.length
    let randomPick = Math.floor(Math.random() * mealsLength)
    console.log(randomPick)

    const recipeRender = meals.map(item => {
        if(item.uuid == randomPick){
            return (
                <div className="mealBox" key={item.uuid} >
                        <img className="mealImg" src={`../images/${item.image}`}/>
                        <div className="mealDetails">
                            <h4 className="mealType">{item.mealType}</h4>
                            <h3>{item.name}</h3>
                        </div>
                </div>
            )
        }
    })
    
    return (
        <div>
            <h1>This is Home</h1>
            <div className="flex homeDiv">
                <div className="">
                    <h3>Random recipe picker</h3>
                    {recipeRender}
                </div>
                <div className="handyhacks">
                    <h4>Handy Hacks</h4>
                    <h4>Shopping List</h4>
                </div>
            </div>
        </div>
    )
}