import React from 'react'
import { HomeLayout } from "../layout/HomeLayout"
import '../../../src/Home/styles/ChallengePageStyle.css';
import reto1 from "../../../src/assets/cardImages/PASTILLARETOsinfondo.png"
import ropesBg from "../../../src/assets/challengeImages/ropesbackground.jpg"
import { Height } from '@mui/icons-material';
import { fontWeight, height } from '@mui/system';




export const ChallengesPage = () => {
    return (

        <HomeLayout>
            <div>
                <div className="startRadial">
                    <div id="title" className="row pt-2">
                        <div className="col-12 mt-lg-5 .background-sections-challenges">
                            <h2>Programas</h2>
                            <div className="centered-content">
                                <h3>Retos que te motivan a superarte.</h3>
                                <button className="button-section-challenge mt-5">¡Empezar mi plan hoy!</button>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <div className="d-flex justify-content-center align-items-center mt-5" style={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${ropesBg})`,
                                    backgroundSize: '100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    height: '800px', // Ajusta este valor a la altura que desees
                                    
                                }}>
                                    <div className="card mb-3" style={{ width: 1200}}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img className="CardChallengeImg background-sections-img mt-4" src={reto1} style={{ width: 400 }} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                        <h5 className="card-title">60 días</h5>
                                                    <p className="card-text">Diseñado para desafiar tus límites y ayudarte a alcanzar tus objetivos de fitness, este programa intensivo combina una variedad de técnicas de entrenamiento para maximizar tus resultados. A lo largo de los 60 días, experimentarás una evolución en tu fuerza, resistencia y flexibilidad, y verás cambios considerables en tu forma física. Este programa no solo cambiará tu cuerpo, sino que también te ayudará a adoptar un estilo de vida más saludable y activo."</p>
                                                    <p className="card-text mb-5">¡Prepárate para sorprenderte de lo que eres capaz de lograr en solo 60 días!"</p>
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <h6 style={{ fontSize: 22, fontWeight: 600 }}>Dificultad:</h6>
                                                            <p>Todos los usuarios</p>
                                                        </div>
                                                        <div>
                                                            <h6 style={{ fontSize: 22, fontWeight: 600 }}>Plan nutricional:</h6>
                                                            <p>SI</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button className="button-section-card mt-2 mb-4">Reservar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </HomeLayout>

    )
}
