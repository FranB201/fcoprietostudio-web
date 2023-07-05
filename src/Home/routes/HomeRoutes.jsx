import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NutritionPage } from "../pages/NutritionPage";
import { StudiosTrainings } from "../pages/StudiosTrainings";



export const HomeRoutes = () => {
  return (

        <Routes>
            <Route path="/" element={ <HomePage/> } />

            <Route path="/nutricion" element={ <NutritionPage/> } />

            <Route path="/studiotrainings" element={ <StudiosTrainings/> } />
            
            <Route path="/*" element={ <Navigate to="/" /> } />

        </Routes>

    )
}
