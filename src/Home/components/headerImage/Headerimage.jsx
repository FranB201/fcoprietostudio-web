import React, { useEffect } from 'react';
import "../../styles/CardVertical.css";
import "../../styles/HeaderImage.css";
import { ModalForm } from '../ModalForm/ModalForm';

import homeImg from '../../../../src/assets/HomeImage/homeImg5.jpg';
import STUDIO2 from '../../../../src/assets/HomeImage/entradaCentro.jpg';
import entradaImg from '../../../../src/assets/HomeImage/entradaCentro.jpg';

export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {


    
    useEffect(() => {
        const carouselElement = document.querySelector('.carousel');
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: 3000
            });
        }
    }, []);
    
    

    return (
<div className="carousel-container" style={{ position: 'relative' }}>
    <div className="carousel slide position-relative">
        <div className="carousel-inner">
            {title}

            <div className="carousel-item active" data-bs-interval="3000">
                <img src={homeImg}  className='w-100 carousel-image' alt="Home" />
            </div>

            <div className="carousel-item" data-bs-interval="3000">
                <img src={entradaImg}  className='w-100 carousel-image' alt="Home" />
            </div>

        </div>

        {/* Agregar las flechas de navegación aquí */}

        <button className="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>

    </div>
    <div className="carousel-description">
        <h3 className="motivation-text title-img-text-header">{title}</h3>
        <p className="motivation-text sentence">{motivationText}</p>
        <p className="motivation-text footer-img-text-header">{presentation1}</p>

        <ModalForm></ModalForm>
    </div>
</div>

    );
};
