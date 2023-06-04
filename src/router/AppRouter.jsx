import { Routes, Route } from "react-router-dom"
import { HomeRoutes } from "../Home/routes/HomeRoutes"

export const AppRouter = () => {
  return (

        <Routes>

            {/* Home */}
            <Route path="/*" element={ <HomeRoutes/> }/>
            
        </Routes>

    )
}
