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
                backgroundColor: 'black',
                height: 60,
                fontFamily: 'Poppins',
                fontSize: '18px'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'flex-start' }}>
                    <a className="nav-link1" href="#contacto">Hola</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
                    <a className="nav-link como-empezar" href="/studiotrainings">Como empezar</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
                    <a className="nav-link" href="/videostrainings">Entrenamientos</a>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <Link to="/">
                    <a href="#top">
                        <img src={logo} alt="logo" className="NavBar-logo" />
                    </a>
                </Link>               
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
                    <a className="nav-link dicen-de-mi" href="#Dicen-De-Mi">Dicen de mi</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'center' }}>
                    <a className="nav-link" href="/studiotrainings#form-contact">Contacto</a>
                </Box>
                <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' }, justifyContent: 'flex-end' }}>
                    <a className="nav-link" href="#acceso">Acceso</a>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
