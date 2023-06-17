import { Box } from "@mui/material"
import { NavBar, Footer, SideBar } from "../components"
import "../styles/HomeStyle.css"
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
export const HomeLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Box className="HomeLayout">
                {/* Navbar */}
                <NavBar />

                {/* Botón para abrir el Sidebar en pantallas pequeñas */}
                <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
                <MenuIcon />
                </button>
            
                {/* Sidebar */}
                <SideBar isOpen={isOpen} toggle={toggleSidebar} />

                <Box component='main' className="HomeLayout-main">
                    { children }
                </Box>
            </Box>

            <Box>
                <Footer />
            </Box>
        </>
    )
}
