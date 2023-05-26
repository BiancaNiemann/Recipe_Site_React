import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function SearchBar() {

    const [searchItem, setSearchItem] = useState('')

    function handleListChange(e) {
        setSearchItem(e.target.value)
    }

    return (
        <div className="flex items-center gap-5 m-6">
            <input
                type="text"
                id="searchItem"
                name="searchItem"
                onChange={handleListChange}
                value={searchItem}
                className="bg-white py-2 px-6 rounded"
                placeholder="Search an item here"
            />
            <NavLink
                to="searchedItem"
                className="text-teal-900 cursor-pointer px-4 rounded-lg bg-white font-semibold h-10 flex items-center"
                state={searchItem}
            >
                Search
            </NavLink>
        </div>
    )
}