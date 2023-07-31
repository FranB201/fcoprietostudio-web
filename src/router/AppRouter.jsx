import { Routes, Route } from "react-router-dom"
import { HomeRoutes } from "../Home/routes/HomeRoutes"
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";


const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

export const AppRouter = () => {
  return (

    <>
    <ScrollToTop /> 

        <Routes>
            {/* Home */}
            <Route path="/*" element={ <HomeRoutes/> }/>
            
        </Routes>

        </>


    )
}
