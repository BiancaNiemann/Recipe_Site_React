import React from "react"
import {Link, NavLink} from "react-router-dom"
import birdy from "../../images/birdy.png"

export default function Header(){
    return (
        <header className="flex justify-evenly pt-6 pb-2 border-b-4 border-gray-300 font-sans text-xl text-red-400 font-bold">
            <Link 
                to="/"
            >
                <div className="flex">
                    <img src={birdy} alt="birdy logo" className="w-16"/>
                    <h2>Kitchen Shares</h2>
                </div>
                
            </Link>
            <NavLink
                to="breakfast"
            >
                Breakfasts
            </NavLink>
            <NavLink
                to="snackbread"
            >
                Snacks & Breads
            </NavLink>
            <NavLink
                to="soup"
            >
                Soups
            </NavLink>
            <NavLink
                to="salad"
            >
                Salads
            </NavLink>
            <NavLink
                to="main"
            >
                Main Meals
            </NavLink>
            <NavLink
                to="dessert"
            >
                Desserts
            </NavLink>
        </header>
    )
}