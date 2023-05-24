import React from "react"
import ReactDOM from 'react-dom/client';
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from "react-router-dom"

import Layout from "./components/Layout";
import Home from "./pages/Home"
import Breakfast from "./pages/Breakfast"
import Soups from "./pages/Soups"
import Salad from "./pages/Salads"
import MainMeals from "./pages/MainMeals"
import Dessert from "./pages/Desserts"
import RecipeDetails from "./pages/RecipeDetail"
import SnacksAndBreads from "./pages/Snacks&Breads";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>} />
    <Route path="breakfast" element={<Breakfast />} />
    <Route path="snackbread" element={<SnacksAndBreads />} />
    <Route path="soup" element={<Soups />} />
    <Route path="salad" element={<Salad />} />
    <Route path="main" element={<MainMeals />} />
    <Route path="dessert" element={<Dessert />} />
    <Route path=":userId" element={<RecipeDetails/>} />
  </Route>

))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
