import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NutritionPage } from "../pages/NutritionPage";



export const HomeRoutes = () => {
  return (

        <Routes>
            <Route path="/" element={ <HomePage/> } />

            <Route path="/nutricion" element={ <NutritionPage/> } />

            
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>

    )
}
