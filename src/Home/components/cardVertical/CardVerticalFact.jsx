import React from 'react'
import "../../styles/CardVerticalFact.css"



export const CardVerticalFact = ({ iconCard, title, descriptionItem }) => {
    return (

        <div className="cardFact-wrapper">
            <div className="cardFact">
                <div className="cardFact-body p-5 content-cardFact">
                    <div>{iconCard}</div>
                    <h3 className="cardFact-title">{title}</h3>
                    <span className='descriptionItemsFact'>
                        {descriptionItem.split('\n').map((item, key) => { return <span key={key}>{item}<br /></span> })}
                    </span>
                </div>
            </div>
        </div>
    );
};




