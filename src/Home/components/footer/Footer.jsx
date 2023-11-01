import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { styled } from "@mui/system";
import "../../styles/FooterStyles.css"



export const Footer = () => {
    return (


        <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Servicios</h3>
                <ul>
                  <li><a href="#studio">Studio</a></li>
                  <li><a href="#grupoxpress">Grupo Xpress</a></li>
                  <li><a href="#personaltraining">Entrenamiento personal</a></li>
                  <li><a href="#entrenamientos">Entrenamiento Online</a></li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Sobre mi</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Francisco Prieto Studio</h3>
                <p>Dirección: Av. de Joan Fuster, 34, Bajo, B, 03700 Dénia, Alicante</p>
                <p>Teléfono: 693 02 32 21</p>
              </div>
              <div className="col item social">
                <a href="https://www.instagram.com/franciscoprietostudio/"><InstagramIcon /></a>
                <a href="https://www.facebook.com/franciscoprietostudio/?locale=es_ES"><FacebookIcon /></a>
              </div>
            </div>
            <p className="copyright">Francisco Prieto Studio © 2023</p>
          </div>
        </footer>
      </div>

    );
};
