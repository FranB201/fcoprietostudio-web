import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { styled } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/NavBarStyle.css";
import logo from "../../../../src/assets/logo/LogoNavBar.png";

  
export const NavBar = () => {
    return (
      <AppBar
          position="fixed"
          className="navbar-horizontal"
          sx={{ 
              backgroundColor:'#1F92D1',
              height:100,
          }}
      >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Box sx={{ flex: 1 }} /> 
              <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
              <img src={logo} alt="logo" className="NavBar-logo"/>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                  <div className="navbar navbar-expand-lg">
                      <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a className="nav-link" href="#hola">Hola</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#comoEmpezar">Como empezar</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#entrenamientos">Entrenamientos</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#testimonios">Dicen de mi</a>
                              </li>  
                              <li className="nav-item">
                                  <a className="nav-link" href="#testimonios">Contacto</a>
                              </li> 
                               <li className="nav-item">
                                  <a className="nav-link" href="#testimonios">Acceso</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </Box>
          </Toolbar>
      </AppBar>
    )
}


