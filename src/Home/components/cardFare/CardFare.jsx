import React from 'react';
import './cardFare.css';


function CardFare() {
    return (
        <>
        <div className="solution_cards_box">
            <div className="solution_card">
                <div className="hover_color_bubble"></div>
                <div className="solu_title">
                    <h3>Asesoramiento mensual</h3>
                </div>
                <div className="solu_description">
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                    <button type="button" className="read_more_btn">Read More</button>
                </div>
            </div>
        </div>
        </>

    );
}

export default CardFare;
