import React from "react"
import {Link} from "react-router-dom"
import { meals } from "../data"
import {hacks} from "../handyhackdata"

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
                    className="flex flex-col items-center bg-white w-4/6 rounded-xl  shadow-lg shadow-teal-500/50 hover:shadow-zinc-700/50" >
                        <img className="w-full h-96 rounded-t-xl object-cover" src={`../images/${item.image}`}/>
                        <div className="text-zinc-700">
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
                <div className="w-4/5 text-zinc-700 p-4">
                    <h3 className="font-bold text-zinc-500 pb-8">{item.title}</h3>
                    <p className="text-zinc-500">{item.details}</p>
                </div>
            )
        }
    })
    
    return (
        <div className="bg-teal-50 min-h-screen flex">
                <div className="border-r-4 border-gray-300 flex flex-col items-center w-4/6">
                    <h3 className="text-center text-3xl py-8 font-bold text-teal-600">Random recipe picker</h3>
                    {recipeRender}
                </div>
                <div className="w-2/6">
                    <div className="bg-white m-6 h-3/5 rounded-2xl pb-4">
                        <h4 className="text-center text-3xl py-8 font-bold text-teal-600">Handy Hacks</h4>
                        {hackRender}
                    </div>
                    <h4 className="text-center text-3xl py-8 font-bold text-teal-600">Shopping List</h4>
                </div>
        </div>
    )
}