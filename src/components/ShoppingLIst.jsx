import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const ShoppingLIst = () => {

    const [shopListArray, setShopListArray] = useState(JSON.parse(localStorage.getItem('shop-list-array')) || [])
    const [listItem, setListItem] = useState('')

    useEffect(() => {
        localStorage.setItem('shop-list-array', JSON.stringify(shopListArray));
    }, [shopListArray])

    function handleListChange(e) {
        setListItem(e.target.value)
    }

    function addToList() {
        if (listItem.length > 0) {
            setShopListArray(prevArray => [...prevArray, { itemName: listItem, itemId: uuidv4() }])
            setListItem('')
        }
    }

    function deleteFromList(e) {
        const newShopArray = shopListArray.filter((item) => item.itemId !== e)
        setShopListArray(newShopArray)
    }

    const shoppingList = shopListArray.map(item => {
        return (
            <li
                className="text-teal-900 cursor-pointer"
                key={item.itemId}
                onClick={() => deleteFromList(item.itemId)}
            >
                {item.itemName}
            </li>
        )
    })


    return (
        <>
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
        </>
    );
}

export default ShoppingLIst;