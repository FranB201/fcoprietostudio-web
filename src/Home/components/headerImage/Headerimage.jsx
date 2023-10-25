import React, { useState, useEffect } from 'react';

import "../../styles/CardVertical.css";
import "../../styles/HeaderImage.css";
import { ModalForm } from '../ModalForm/ModalForm';

import homeImg from '../../../../src/assets/HomeImage/homeImg5_.jpg';
import STUDIO2 from '../../../../src/assets/HomeImage/entradaCentro_.jpg';
import entradaImg from '../../../../src/assets/studioImages/studio2.jpg';

export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {
    const images = [homeImg,entradaImg];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        console.log('images.length:', images.length); // Verifica la longitud de tu array de imágenes
        const intervalId = setInterval(() => {
            console.log('Changing Image'); // Este se imprimirá cada vez que se cambie la imagen
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    console.log('Rendering with currentIndex:', currentIndex); // Este se imprimirá cada vez que se renderice el componente

    return (
        <div className="carousel-container" style={{ position: 'relative' }}>
            <img src={images[currentIndex]} className='w-100 carousel-image' alt="Home" />
            <div className="carousel-description">
                <h3 className="motivation-text title-img-text-header">{title}</h3>
                <p className="motivation-text sentence">{motivationText}</p>
                <p className="motivation-text footer-img-text-header">{presentation1}</p>
            
            <ModalForm></ModalForm>
            </div>

        </div>
    );
};
