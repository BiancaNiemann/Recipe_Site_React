import React from "react"
import {Link, NavLink} from "react-router-dom"
import birdy from "../images/birdy.png"
import IsVege from "./IsVege"

export default function Header(){
    return (
        <div className="border-b-4 border-gray-300 ">
        <header className="grid lg:flex justify-evenly pt-6 pb-2  font-sans text-xl text-red-400 font-bold">
            <Link 
                to="/"
            >
                <div className="flex">
                    <img src={birdy} alt="birdy logo" className="w-16"/>
                    <h2 className="text-4xl">Kitchen Shares</h2>
                </div>
                
            </Link>
            <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row pl-20 pt-3">
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
            </div>
        </header>
         <IsVege />
        </div>

    )
}