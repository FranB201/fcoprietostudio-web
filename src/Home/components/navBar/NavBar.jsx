import { AppBar, Toolbar, Box } from "@mui/material";

import "../../styles/NavBarStyle.css";
import logo from "../../../../src/assets/logo/logoClasico.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const handleSectionClick = sectionId => {
    if (window.location.pathname !== "/") {
      navigate("/").then(() => {
        scrollToSection(sectionId);
      });
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AppBar
      position="fixed"
      className="navbar-horizontal"
      sx={{
        backgroundColor: "black",
        height: 75,
        fontFamily: "Poppins",
        fontSize: "18px"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          className="Same-line"
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "flex-start"
          }}
        >
          <Link className="nav-link1" to="/InfoContact">
            Hola
          </Link>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "center"
          }}
        >
          <Link
            className="nav-link como-empezar Same-line"
            to="/studiotrainings"
          >
            Como empezar
          </Link>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "center"
          }}
        >
          <Link className="nav-link Same-line" to="/videostrainings">
            Entrenamientos
          </Link>
        </Box>
        <Link to="/" className="NavBar-logo-link" onClick={scrollToTop}>
          <img src={logo} alt="logo" className="NavBar-logo" />
        </Link>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "center"
          }}
        >
          <a
            className="nav-link dicen-de-mi Same-line"
            href="#Dicen-De-Mi"
            onClick={() => handleSectionClick("Dicen-De-Mi")}
          >
            Dicen de mi
          </a>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "center"
          }}
        >
          <Link className="nav-link Same-line" to="/InfoContact">
            Contacto
          </Link>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
            justifyContent: "flex-end"
          }}
        >
          <Link className="nav-link Same-line" to="/login">
            Acceso
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
