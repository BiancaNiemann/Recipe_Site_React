import React from "react"
import {Link} from "react-router-dom"
import { meals } from "../data/data"
import {hacks} from "../data/handyhackdata"

export default function Home(){
    let mealsLength = meals.length
    let hacksLength = hacks.length
    let randomPick = Math.floor(Math.random() * mealsLength) + 1
    let randomHack = Math.floor(Math.random() * hacksLength) + 1

    const recipeRender = meals.map(item => {
        if(item.uuid == randomPick){
            return (
                <Link 
                    to={`../${item.uuid}`}  
                    key={item.uuid} 
                    className="flex flex-col items-center bg-white w-4/6 rounded-xl  shadow-lg  hover:shadow-teal-500/50" >
                        <img className="w-full h-96 rounded-t-xl object-cover" src={`../images/${item.image}`}/>
                        <div className="text-teal-900">
                            <h4 className="capitalize py-6 font-semibold text-center">meal type: {item.mealType}</h4>
                            <h3 className="capitalize py-6 font-extrabold text-center text-4xl">{item.name}</h3>
                        </div>
                </Link>
            )
        }
    })

    const hackRender = hacks.map(item => {
        if(item.id === randomHack){
            return (
                <div className="text-teal-900 px-6 py-8" key="item.uuid">
                    <h3 className="font-bold pb-8 text-xl text-center">{item.title}</h3>
                    <p className="text-teal-900  text-center">{item.details}</p>
                </div>
            )
        }
    })
    
    return (
        <div className=" flex main">
                <div className="border-r-4 border-gray-300 flex flex-col items-center w-4/6">
                    <h3 className="text-center text-3xl py-8 font-bold text-red-400">Random recipe picker</h3>
                    {recipeRender}
                </div>
                <div className="w-2/6">
                    <h4 className="text-center text-3xl pt-8 pb-2 font-bold text-red-400">Handy Hacks</h4>
                    <div className="bg-white m-6 h-80 rounded-2xl pb-4"> 
                        {hackRender}
                    </div>
                    <h4 className="text-center text-3xl pt-4-8 font-bold text-red-400">Shopping List</h4>
                    <div className="m-6 h-96 bg-white rounded-2xl pb-4">

                    </div>
                </div>
        </div>
    )
}