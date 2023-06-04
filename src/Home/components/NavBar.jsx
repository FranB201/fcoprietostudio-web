import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { styled } from "@mui/system";

import "../styles/HomeStyle.css"



const NavBarTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
    marginLeft: theme.spacing(2), // provides uniform spacing
    textDecoration: 'none', // removes underline from the links
  }));


export const NavBar = () => {
  return (

        <AppBar
            position="fixed"

            sx={{ 

                backgroundColor:'#1F92D1',
                height:100,
                
            }}

        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1 }} />
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <img src="../../src/assets/logo/LogoNavBar.png" alt="logo" className="NavBar-logo"/>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                <NavBarTypography component="a" href="#hola">Hola</NavBarTypography>
                <NavBarTypography component="a" href="#comoEmpezar">Como empezar</NavBarTypography>
                <NavBarTypography component="a" href="#entrenamientos">Entrenamientos</NavBarTypography>
                <NavBarTypography component="a" href="#testimonios">Testimonios</NavBarTypography>
                </Box>
            </Toolbar>
        </AppBar>

    )
}
