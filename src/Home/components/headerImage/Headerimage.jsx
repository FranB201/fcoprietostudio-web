import React from 'react'
import "../../styles/CardVertical.css"
import CheckIcon from '@mui/icons-material/Check';
import "../../styles/HeaderImage.css"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HomeImg3 from "../../../assets/HomeImage/HomeImg5.jpg";
import { ModalForm } from '../ModalForm/ModalForm';
export const HeaderImage = ({ title, motivationText, presentation1, presentation2, buttonText }) => {
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
};
