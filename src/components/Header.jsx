import React from "react"
import {Link, NavLink} from "react-router-dom"

export default function Header(){
    return (
        <header>
            <Link 
                to="/"
            >
                Kitchen Shares
            </Link>
            <NavLink
                to="breakfast"
            >
                Breakfasts
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
                to="mainmeal"
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