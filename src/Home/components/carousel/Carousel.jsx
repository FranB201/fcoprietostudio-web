import React from 'react'

import AITORFIN from '../../../../src/assets/physicChange/AITORFIN.jpeg';
import JOSEFIN from '../../../../src/assets/physicChange/JOSEFIN.jpeg';
import OLGAFIN from '../../../../src/assets/physicChange/OLGAFIN.jpeg';
import OLGAFIN2 from '../../../../src/assets/physicChange/OLGAFIN2.jpeg';
import StarIcon from '@mui/icons-material/Star';


import carmenAvatar from '../../../../src/assets/reviewImages/CarmenReview.png';
import EstefaniaReview from '../../../../src/assets/reviewImages/EstefaniaReview.png';
import NoeliaReview from '../../../../src/assets/reviewImages/NoeliaReview.png';
import RaulReview from '../../../../src/assets/reviewImages/RaulReview.png';




export const Carousel = () => {
    return (


<div id="carouselExampleInterval" className="carousel slide mt-3" data-bs-ride="carousel">
    <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="20000">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-xl-12">
                <img src={AITORFIN} className='width="150" height="150"'/>
                </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-xl-12">
                    <img src={JOSEFIN} className='width="150" height="150"'/>

                </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-xl-12">
                    <img src={OLGAFIN} className='width="150" height="150"'/>

                </div>
            </div>
        </div>

        <div className="carousel-item" data-bs-interval="10000">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-xl-12">
                    <img src={OLGAFIN2} className='width="150" height="150"'/>

                </div>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>

    )
}
