import React from "react";
import "../../styles/SideBar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export const SideBar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggle}>
        <CloseIcon />
      </button>
      <div className="sidebar-content">
        {/* Aquí van tus enlaces */}
        <Link to="/">Inicio</Link>
        <Link to="/InfoContact">Hola</Link>
        <Link to="/studiotrainings">Como empezar</Link>
        <Link to="/videostrainings">Entrenamientos</Link>
        <a
          href="#Dicen-De-Mi"
          onClick={() => handleSectionClick("Dicen-De-Mi")}
        >
          Dicen de mi
        </a>
        <Link to="/InfoContact">Contacto</Link>
        <Link to="/login">Acceso</Link>
      </div>
    </div>
  );
};
