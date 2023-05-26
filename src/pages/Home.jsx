import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { meals } from "../data/data"
import { hacks } from "../data/handyhackdata"
import { v4 as uuidv4 } from 'uuid'
import SearchBar from "../components/SearchBar"

export default function Home() {
    const [handyHackDot, setHandyHackDot] = useState(1)
    const [randomRecipe, setRandomRecipe] = useState(1)
    const [randomHack, setRandomHack] = useState(1)
    const [shopListArray, setShopListArray] = useState(JSON.parse(localStorage.getItem('shop-list-array')) || [])
    const [listItem, setListItem] = useState('')

    useEffect(() => {
        let mealsLength = meals.length
        let randomPick = Math.floor(Math.random() * mealsLength) + 1
        setRandomRecipe(randomPick)
    }, [])

    useEffect(() => {
        let hacksLength = hacks.length
        let randomHack = Math.floor(Math.random() * hacksLength) + 1
        setRandomHack(randomHack)
    }, [handyHackDot])

    useEffect(() => {
        localStorage.setItem('shop-list-array', JSON.stringify(shopListArray));
    }, [shopListArray])


    function nextHack() {
        if (handyHackDot === 1) {
            setHandyHackDot(2)
        } else if (handyHackDot === 2) {
            setHandyHackDot(3)
        } else if (handyHackDot === 3) {
            setHandyHackDot(1)
        }
    }

    const recipeRender = meals.map(item => {
        if (item.uuid == randomRecipe) {
            return (
                <Link
                    to={`../${item.uuid}`}
                    key={item.uuid}
                    className="flex flex-col items-center bg-white w-7/8 rounded-xl  shadow-lg  hover:shadow-teal-500/50" >
                    <img className="w-full h-96 rounded-t-xl object-cover" src={(item.image)} alt={item.alt} />
                    <div className="text-teal-900">
                        <h4 className="capitalize py-6 font-semibold text-center">meal type: {item.mealType}</h4>
                        <h3 className="capitalize py-6 font-extrabold text-center text-4xl">{item.name}</h3>
                    </div>
                </Link>
            )
        }
    })

    const hackRender = hacks.map(item => {
        if (item.id === randomHack) {
            return (
                <div
                    className="text-teal-900 px-6 py-8"
                    key="item.uuid"
                >
                    <h3 className="font-bold pb-4 text-xl text-center">{item.title}</h3>
                    <p className="text-teal-900 text-center">{item.details}</p>
                    <p className="text-red-400 text-center">(Click for more)</p>
                </div>
            )
        }
    })

    function handleListChange(e) {
        setListItem(e.target.value)
    }

    function addToList() {
        if(listItem.length > 0){
            setShopListArray(prevArray => [...prevArray, { itemName: listItem, itemId: uuidv4() }])
            setListItem('')
        }
    }

    function deleteFromList(e){
        const newShopArray = shopListArray.filter((item)=> item.itemId !== e)
        setShopListArray(newShopArray)
    }

    const shoppingList = shopListArray.map(item => {
        return (
            <li
                className="text-teal-900 cursor-pointer"
                key={item.itemId}
                onClick={()=>deleteFromList(item.itemId)}
            >
                {item.itemName}
            </li>
        )
    })

    return (
        <div className=" flex flex-col lg:flex-row main">
            <div className="lg:border-r-4 border-gray-300 flex flex-col items-center lg:w-7/12">
            <SearchBar />
                <h3 className="text-center text-3xl py-8 font-bold text-red-400">Random recipe picker</h3>
                {recipeRender}
            </div>
            <div className="lg:w-5/12 content-center flex flex-col items-center">
                <h4 className="text-center text-3xl pt-8 pb-2 font-bold text-red-400">Handy Hacks</h4>
                <div
                    className="bg-white m-6 h-80 rounded-2xl pb-4 flex flex-col justify-between cursor-pointer w-4/5"
                    onClick={nextHack}>
                    {hackRender}
                    <div className="flex gap-x-1 justify-center mt-0">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={handyHackDot === 1 ? { backgroundColor: "rgb(45 212 191)" } : { backgroundColor: "rgb(19 78 74)" }}
                        >
                        </div>
                        <div
                            className="w-4 h-4 rounded-full"
                            style={handyHackDot === 2 ? { backgroundColor: "rgb(45 212 191)" } : { backgroundColor: "rgb(19 78 74)" }}
                        >
                        </div>
                        <div
                            className="bg-teal-900 w-4 h-4 rounded-full"
                            style={handyHackDot === 3 ? { backgroundColor: "rgb(45 212 191)" } : { backgroundColor: "rgb(19 78 74)" }}
                        >
                        </div>
                    </div>
                </div>
                <h4 className="text-center text-3xl pt-4-8 font-bold text-red-400">Shopping List</h4>
                <div className="m-6 h-fit bg-white rounded-2xl p-4 w-4/5">
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleListChange}
                            value={listItem}
                            placeholder="type your item here"
                            className="pl-4 placeholder:text-teal-900 border-teal-900 border-2 rounded-lg w-full h-10 text-teal-900"
                        />
                        <div
                            className="bg-teal-900 cursor-pointer px-4 rounded-lg text-white font-semibold h-10 flex items-center "
                            onClick={addToList}
                        >Save
                        </div>
                    </div>
                    {shopListArray.length <= 0 
                        ? <p className="text-red-400 text-center px-6">Save some items here, and then just click on the item to delete it!</p> 
                        : shoppingList
                    }
                </div>
            </div>
        </div>
    )
}