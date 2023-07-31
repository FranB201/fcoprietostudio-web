import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { styled } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/NavBarStyle.css";
import logo from "../../../../src/assets/logo/logoClasico.png";
import { Link } from 'react-router-dom';





export const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            className="navbar-horizontal"
            sx={{
                //backgroundColor: '#2DAAE2',
                backgroundColor: 'black',
                height: 60,
                fontFamily: 'Poppins',
                fontSize: '18px'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link1" href="#contacto">Hola</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#comoEmpezar">Como empezar</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#entrenamientos">Entrenamientos</a>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <Link to="/">

                    <a href="#top">
                        <img src={logo} alt="logo" className="NavBar-logo" />
                    </a>
                </Link>               
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
                    <a className="nav-link" href="#dicenDeMiSection">Dicen de mi</a>
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


