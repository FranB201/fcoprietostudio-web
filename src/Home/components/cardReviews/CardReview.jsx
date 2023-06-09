import React from 'react'
import "../../styles/CardReview.css"
import StarIcon from '@mui/icons-material/Star';
import carmenAvatar from '../../../../src/assets/reviewImages/CarmenReview.png';
import EstefaniaReview from '../../../../src/assets/reviewImages/EstefaniaReview.png';
import NoeliaReview from '../../../../src/assets/reviewImages/NoeliaReview.png';
import RaulReview from '../../../../src/assets/reviewImages/RaulReview.png';





export const CardReview = () => {
    return (

        <div id="carouselExampleInterval" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <img src={EstefaniaReview}
                                        className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                        height="150" />
                                </div>
                                <div
                                    className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 className="mb-4 userNameReview">Estefania Fita</h4>
                                    <p>
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                    </p>
                                    <p className="mb-0 pb-3 bodyReview">
                                        Muy contenta con mis resultados en 5 semanas!! Con su programa personalizado, el seguimiento y la atención de Francisco que es un gran profesional. El centro y sus máquinas de 10!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <img src={NoeliaReview}
                                        className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                        height="150" />
                                </div>
                                <div
                                    className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 className="mb-4 userNameReview">Noelia Soldevilla</h4>
                                    <p>
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                    </p>
                                    <p className="mb-0 pb-3 bodyReview">
                                        Se me hacía un mundo ir al gimnasio y siempre encontraba alguna excusa para no hacerlo pero desde que conozco Prieto Studio no he fallado ningún día. Me han enganchado sus clases, su atención personalizada, sus instalaciones y la facilidad con la que puedes elaborar tu horario semanal a través de su aplicación.
                                        Sin duda, digno de recomendación.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <img src={RaulReview}
                                        className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                        height="150" />
                                </div>
                                <div
                                    className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 className="mb-4 userNameReview">Raul Megido</h4>
                                    <p>
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                    </p>
                                    <p className="mb-0 pb-3 bodyReview">
                                        Entrenamientos personalizados, supervisados en todo momento y con un nivel de detalle impecable.
                                        Las mejoras se notan rapidamente.
                                        Gran centro de entrenamiento y Francisco Prieto es un excelente profesional y un 10 como persona
                                        Destaco tambien las clases express que imparte Mar donde se da todo en solo 30 min y sales satisfecho.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-xl-8">
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <img src={carmenAvatar}
                                        className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" />
                                </div>
                                <div
                                    className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                    <h4 className="mb-4 userNameReview">Carmen Lázaro</h4>
                                    <p>
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                        <StarIcon style={{ fill: '#FFD700', filter: 'drop-shadow(2px 2px 2px gray)' }} />
                                    </p>
                                    <p className="mb-0 pb-3 bodyReview">
                                        Hay sitios que siempre tratan de sacar la mejor versión de ti mismo, y este gimnasio es, sin lugar a duda, uno de ellos. El mérito se debe , principalmente, a sus entrenadores, Francisco y Mar, grandes profesionales del Fitness. No sólo te estimulan a esforzarte ( con resultados visibles) sino que, además, aprendes el cómo y el porqué de las reacciones de tu cuerpo con sus claras explicaciones.
                                    </p>
                                </div>
                            </div>
                        </div>
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
    )



}

