import HandyHacks from "../components/HandyHacks"
import RandomRecipe from "../components/RandomRecipe"
import ShoppingLIst from "../components/ShoppingLIst"
import SearchBar from "../components/SearchBar"
import IsVege from "../components/IsVege"

export default function Home() {
    return (
        <div className=" flex flex-col lg:flex-row main items-center lg:items-stretch">
            <div className="lg:border-r-4 border-gray-300 flex flex-col items-center lg:w-7/12">
                <SearchBar />
                <RandomRecipe />
            </div>
            <div className="lg:w-5/12 content-center flex flex-col items-center">
                <HandyHacks />
                <ShoppingLIst />
            </div>
        </div>
    )
}