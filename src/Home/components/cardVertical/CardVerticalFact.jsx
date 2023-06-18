import React from 'react'
import "../../styles/CardVerticalFact.css"



export const CardVerticalFact = ({ icon, title, descriptionItems }) => {
    return (

        <div className="cardFact-wrapper">

            <div className="cardFact">

                <div className="cardFact-body p-5 content-cardFact">
                    <div>
                        {icon}
                    </div>
                    <h3 className="cardFact-title">{title}</h3>

                    <span className='descriptionItemsFact'>{descriptionItems}</span>


                    {/*     <ul>
                    {descriptionItems.map((item, index) => (
                    <li key={index}>
                        {item}
                        <br />
                    </li>
                    ))}
                    </ul> */}
                </div>
            </div>
        </div>
    );
};




