import React from 'react'
import "../../styles/CardVertical.css"
export const CardVertical = () => {
    return (
        
        <div className="card-wrapper">
            <div className="div-image">
            <img className="img-thumbnail"
                    src="../../../src/assets/cardImages/grupxpress.jpg"
                    alt="..."
                />
            </div>
            <div className="card">
                
                <div className="card-body content-Card">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <ul>
                        <li>dcdjfcdjfjdf</li>
                        <li>fdfdfd</li>
                        <li>fdfdf</li>
                        <li>fdfdfgd</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};




