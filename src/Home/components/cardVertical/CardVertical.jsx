import React from 'react'
import "../../styles/CardVertical.css"


 
export const CardVertical = ({ imageUrl, title, descriptionItems }) => {
    return (
        
        <div className="card-wrapper">
            <div className="div-image">
            <img className="img-thumbnail" src={imageUrl} alt={title} />
            </div>
            <div className="card">
                
                <div className="card-body content-Card">
                    <h3 className="card-title">{title}</h3>

                    <ul>
                    {descriptionItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <br />
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};




