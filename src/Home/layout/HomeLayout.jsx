import { Box } from "@mui/material"


export const HomeLayout = ({ children }) => {
  return (

        <Box sx={{ display:'flex' }}>

            {/* Navbar */}

            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

            { children }

            </Box>

            {/* BottomBar */}

        </Box>

    )
}
