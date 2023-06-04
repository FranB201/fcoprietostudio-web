import { Box } from "@mui/material"
import { NavBar } from "../components"
import "../styles/HomeStyle.css"


export const HomeLayout = ({ children }) => {
  return (

        <Box className="HomeLayout">

            {/* Navbar */}
            <NavBar />

            <Box component='main' className="HomeLayout-main">

            { children }

            </Box>

            {/* BottomBar */}

        </Box>

    )
}
