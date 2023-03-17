import React from "react"
import {Link, NavLink} from "react-router-dom"
import birdy from "../../images/birdy.png"

export default function Header(){
    return (
        <header className="header flex">
            <Link 
                to="/"
            >
                <div className="flex">
                    <img src={birdy} alt="birdy logo" className="logo"/>
                    <h2>Kitchen Shares</h2>
                </div>
                
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