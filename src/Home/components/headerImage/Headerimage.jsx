import React from 'react'
import "../../styles/CardVertical.css"
import "../../styles/HeaderImage.css"
import { ModalForm } from '../ModalForm/ModalForm';


import homeImg from '../../../../src/assets/HomeImage/homeimg5.jpg';
import STUDIO2 from '../../../../src/assets/studioImages/studio2.jpg';
import entradaImg from '../../../../src/assets/HomeImage/entradaCentro.jpg';


export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {
    return (
<div className="carousel-container" style={{ position: 'relative' }}>     
<div  className="carousel slide position-relative" data-bs-ride="carousel">
    <div className="carousel-inner">
    {title}
    
        <div className="carousel-item active" data-bs-interval="5000">
            <img src={homeImg} className='w-100 carousel-image'/>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
            <img src={STUDIO2} className='w-100 carousel-image'/>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
            <img src={entradaImg} className='w-100 carousel-image'/>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
            <img src={STUDIO2} className='w-100 carousel-image'/>
        </div>
    </div>
</div>
    <div className="carousel-description" >
        <h3 className="motivation-text title-img-text-header">{title}</h3>
        <p className="motivation-text sentence">{motivationText}</p>
        <p className="motivation-text footer-img-text-header">{presentation1}</p>
        
        <ModalForm></ModalForm>
    </div>
</div>

    );
};

