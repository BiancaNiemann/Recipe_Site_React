import React, { useEffect, useState } from "react"
import { hacks } from "../data/handyhackdata"

const HandyHacks = () => {

    const [randomHack, setRandomHack] = useState(1)
    const [handyHackDot, setHandyHackDot] = useState(1)

    useEffect(() => {
        let hacksLength = hacks.length
        let randomHack = Math.floor(Math.random() * hacksLength) + 1
        setRandomHack(randomHack)
    }, [handyHackDot])

    function nextHack() {
        if (handyHackDot === 1) {
            setHandyHackDot(2)
        } else if (handyHackDot === 2) {
            setHandyHackDot(3)
        } else if (handyHackDot === 3) {
            setHandyHackDot(1)
        }
    }

    const hackRender = hacks.map(item => {
        if (item.id === randomHack) {
            return (
                <div
                    className="text-teal-900 px-6 py-8"
                    key="item.uuid"
                >
                    <h3 className="font-bold pb-4 text-xl text-center">{item.title}</h3>
                    <p className="text-teal-900 text-center">{item.details}</p>
                </div>
            )
        }
    })

    return (
        <>
            <h4 className="text-center text-3xl pt-8 pb-2 font-bold text-red-400">Handy Hacks</h4>
            <div
                className="bg-white m-6 h-96 lg:h-80 rounded-2xl pb-4 flex flex-col justify-between cursor-pointer w-4/5"
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
        </>

    );
}

export default HandyHacks;