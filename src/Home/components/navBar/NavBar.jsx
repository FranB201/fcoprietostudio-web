import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { styled } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/NavBarStyle.css";
import logo from "../../../../src/assets/logo/LogoSinFondo.png";

  


export const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            className="navbar-horizontal"
            sx={{ 
                backgroundColor:'#124559',
                height:100,
                fontFamily:'Poppins',
                fontSize:'18px'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 0.5, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#hola">Hola</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#comoEmpezar">Como empezar</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#entrenamientos">Entrenamientos</a>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                    <img src={logo} alt="logo" className="NavBar-logo"/>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#testimonios">Dicen de mi</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#contacto">Contacto</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#acceso">Acceso</a>
                </Box>
            </Toolbar>
        </AppBar>
    )
}


