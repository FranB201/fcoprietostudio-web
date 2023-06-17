import React from "react";
import '../../styles/SideBar.css';
import CloseIcon from '@mui/icons-material/Close';

export const SideBar = ({ isOpen, toggle }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>

            <button className="close-btn" onClick={toggle}>
                <CloseIcon/>
            </button>
            <div className="sidebar-content">
                {/* Aquí van tus enlaces */}
                <a href="#hola">Hola</a>
                <a href="#comoEmpezar">Como empezar</a>
                <a href="#entrenamientos">Entrenamientos</a>
                <a href="#testimonios">Testimonios</a>
            </div>
        </div>
    );
};
