import React from 'react'
import "../../styles/CardVertical.css"
import CheckIcon from '@mui/icons-material/Check';
import "../../styles/HeaderImage.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HomeImg3 from "../../../assets/HomeImage/HomeImg5.jpg";
import { ModalForm } from '../ModalForm/ModalForm';


import AITORFIN from '../../../../src/assets/HomeImage/homeimg5.jpg';
import JOSEFIN from '../../../../src/assets/studioImages/studio2.jpg';
import OLGAFIN from '../../../../src/assets/HomeImage/homeimg5.jpg';
import STUDIO2 from '../../../../src/assets/studioImages/studio2.jpg';
export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {
    return (
<div className="carousel-container" style={{ position: 'relative' }}>     
<div  className="carousel slide position-relative" data-bs-ride="carousel">
    <div className="carousel-inner">
    {title}
    
        <div className="carousel-item active" data-bs-interval="5000">
            <img src={AITORFIN} className='w-100 carousel-image'/>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
            <img src={JOSEFIN} className='w-100 carousel-image'/>
        </div>

        <div className="carousel-item" data-bs-interval="5000">
            <img src={OLGAFIN} className='w-100 carousel-image'/>
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


/*export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {
    return (
        <div className="homeImg-container-header" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${HomeImg3})`
        }}>
            <div className="col-lg-12 col-md-12 col-sm-12 img-text-header">
                <div className="motivation-text title-img-text-header">
                    {title}
                </div>
                <span className="motivationSentence motivation-text"> {motivationText}  </span>
                <div className="motivation-text footer-img-text-header">
                    {presentation1}
                </div>
                <div className="motivation-text footer-img-sub-text ">
                    {presentation2}
                </div>
                <ModalForm></ModalForm>

            </div>
        </div>
    );
};*/
