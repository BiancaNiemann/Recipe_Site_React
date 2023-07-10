import React, { useState } from "react";
import { Link } from "react-router-dom";

const IsVege = () => {

    const [isVeg, setIsVeg] = useState(false)

    function handleVege() {
        setIsVeg(prevVeg => !prevVeg)
    }

    return (
        <div className="flex justify-center mb-4">
            <div 
                className="w-12 h-6 bg-red-400 mr-4 rounded-xl flex" >
                {!isVeg ?
                    <div
                        className="w-6 h-6 bg-gray-600 rounded-xl"
                    >
                    </div> :
                    <Link
                        state={{ select : isVeg}}
                        onClick={handleVege}
                        className="w-6 h-6 bg-red-400 rounded-xl"
                    >
                    </Link>
                }
                {isVeg ?
                    <div
                        className="w-6 h-6 bg-gray-600 rounded-xl"
                    >
                    </div> :
                    <Link
                        state={{ select : isVeg}}
                        onClick={handleVege}
                        className="w-6 h-6 bg-red-400 rounded-xl"
                    >
                    </Link>
                }
            </div>
            <h4 className="text-white font-bold">Show only Vegetarian recipes</h4>
        </div>
    );
}

export default IsVege;