
import React, { useState, useEffect } from "react";
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical, CardReview, CardVerticalFact, Carousel } from "../components"
import studioCard from "../../../src/assets/cardImages/studioCard.png"
import grupxpressCard from "../../../src/assets/cardImages/grupoXpresSala.jpg"
import personaltrainingCard from "../../../src/assets/cardImages/entrenamientoP.jpg"
import HomeImg3 from "../../../src/assets/HomeImage/HomeImg31.png"
import WarningIcon from '@mui/icons-material/Warning';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Fade } from "react-awesome-reveal";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HolaImg from "../../../src/assets/infoImage/fisicocultirismo-francisco-prieto-studio.jpg"
import CloseIcon from '@mui/icons-material/Close';





export const HomePage = () => {

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 5000);

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }, []);


    return (

        <HomeLayout>

            <div className="homeImg-container" style={{ '--imagen-de-fondo': `url(${HomeImg3})` }}>
                <div className="col-lg-12 col-md-12 col-sm-12 img-text">
                    <div className="motivation-text title-img-text">
                        Ángel Di Maria dijo...
                    </div>
                    <span className="motivationSentence motivation-text">  'El dolor pasa, el sudor se seca, el cansancio termina. Pero hay algo que nunca desaparecerá: la satisfacción de haberlo logrado.'  </span>
                    <div className="motivation-text footer-img-text">
                        Soy Francisco Prieto,
                    </div>
                    <div className="motivation-text footer-img-sub-text">
                        Y si tú quieres te ayudaré a que tú también lo logres.
                    </div>
                    <div className="button-container">
                        <a className="join-now text-button-motivation-text">
                            <span className="text-button-join-now">unete ahora</span>
                            <ArrowRightAltIcon fontSize="large" />
                        </a>
                    </div>
                </div>
                {showMessage && (
                    <div
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            color: "white",
                            padding: "50px",
                            position: "absolute",
                            top: "30%",
                            left: "10%",
                            width: "80%",
                            borderRadius: "20px",
                            zIndex: 2, // Asegúrate de que el zIndex sea adecuado en tu contexto
                        }}
                    >
                        <button
                            onClick={() => setShowMessage(false)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "none",
                                border: "none",
                                color: "white",
                                fontSize: "24px",
                                cursor: "pointer",
                            }}
                        >
                            <CloseIcon />
                        </button>
                        <h2>Gracias por visitar nuestra página web,</h2>

                        <br></br>
                      

                        <h4>
                            ¡Estad atentos!, Estamos trabajando en una nueva web con muchas novedades.
                        </h4>

                    </div>
                )}
            </div>

            <div>
                <div className="startRadial rezise">
                    <div id="comoEmpezar" className="row pt-5">
                        <div className="col-12 mt-lg-5 h1Cardvertical">
                            <h1>PROGRAMAS PRESENCIALES</h1>
                        </div>
                    </div>
                    <div className="row gx-1 mt-lg-5 card-section" >
                        <div id="studio" className="col-lg-4 col-md-6 col-sm-12">
                            <CardVertical
                                imageUrl={studioCard}
                                title="Studio 3XL"
                                descriptionItems={[
                                    "Instalacion totalmente equipada",
                                    "Tecnología de última generación en fitness",
                                    "Ambiente motivador y enérgico",
                                    "Métodos de entrenamiento eficaces"
                                ]}
                            />
                        </div>
                        <div id="grupoxpress" className="col-lg-4 col-md-6  col-sm-12 cardVertical-Container">
                            <CardVertical
                                imageUrl={grupxpressCard}
                                title="Grupo Xpress"
                                descriptionItems={[
                                    "Clases divertidas y desafiantes",
                                    "Aptas para todos los públicos",
                                    "Enfoque integral en salud y bienestar",
                                    "Entrenamiento periodizado"

                                ]}
                            />
                        </div>
                        <div id="personaltraining" className="col-lg-4 col-md-6 col-sm-12">
                            <CardVertical
                                imageUrl={personaltrainingCard}
                                title="Entrenamiento Personal"
                                descriptionItems={[
                                    "Entrenamiento personalizado 100%",
                                    "Resultado garantizado",
                                    "Revisiones constantes",
                                    "Plan nutricional incluido",
                                ]}
                            />
                        </div>
                    </div>

                </div>

            </div>
            <div className="encuentraTuEntrenamiento-container">
                <div id="entrenamientos" className="row gx-1">
                    <div className="col-12  h1EncuentraTu">
                        <div className="row">
                            <div className="col-lg-6 find-work-out">
                                <div className="banner-container">

                                    <div className="container-proximamente">
                                        <span className="texto-proximamente">
                                            <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                                            <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                                            <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                                            <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                                            <div><span>PRÓXIMAMENTE</span> <WarningIcon className="warningIconBanner" style={{ fontSize: 70 }} /></div>
                                            <div><span>PRÓXIMAMENTE</span></div>
                                        </span>
                                    </div>
                                    <div className="play-icon-container">
                                        <PlayArrowIcon className="play-icon" style={{ fontSize: 200 }} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12  img-text-find">
                                <div className="row">
                                    <div className="col">
                                        <div className="motivation-text-encuentraTuEnt title-img-text">
                                            Ejercicios

                                            <div className="lineStyle" />
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="motivationSentence motivation-text-encuentraTuEnt">
                                            ENCUENTRA TU ENTRENAMIENTO
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="motivation-text-encuentraTuEnt-body footer-img-text-encuentraT">
                                            <p style={{ fontWeight: 'bold' }}>Bienvenidos a nuestro <span style={{ color: '#EFF6E0' }}>portal de entrenamiento personal</span>.</p>
                                            <p>Descubre <span style={{ color: '#EFF6E0', fontWeight: 'bold' }}>rutinas de ejercicios personalizadas</span> para cualquier lugar: casa, gimnasio o al aire libre.</p>
                                            <p>No importa si buscas ganar fuerza, aumentar la resistencia, perder peso, o simplemente impulsar tu energía y bienestar.</p>
                                            <p style={{ fontWeight: 'bold' }}>¡Estamos para apoyarte en tu <span style={{ color: '#EFF6E0' }}>viaje hacia la salud y al fitness</span>!</p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


            </div>
            <div>

                <div className="facts-container rezise ">

                    {/*<Fade direction="up" triggerOnce={true} fraction={0.6} className="fade-element"> */}
                    <div className="row cardFact-section " >
                        <div id="experience" className="col-lg-4 col-md-6 col-sm-12">
                            <CardVerticalFact
                                iconCard={<WorkspacePremiumIcon className="fact-icon" style={{ fontSize: 80 }} />}

                                title="Experiencia"
                                descriptionItem={`No somos un gimnasio. Entrenadores, Nutricionista, Quiromasajista y Fisioterapeuta trabajamos unidos y en perfecta comunicación para garantizar siempre el mejor resultado.
                
                                    `}

                            />
                        </div>
                        <div id="interview" className="col-lg-4 col-md-6 col-sm-12 interview-card">
                            <CardVerticalFact
                                iconCard={<AssignmentIndIcon className="fact-icon" style={{ fontSize: 80 }} />}
                                title="Entrevista inicial"
                                descriptionItem={`Escuchamos a nuestros clientes, en una entrevista incial, evaluamos
                                    su situación personal y hacemos lo que entendemos que necesitan para ayudarles
                                    a conseguir su objetivo.
                                        `}
                            />
                        </div>
                        <div id="personaltraining" className="col-lg-4 col-md-6 col-sm-12">
                            <CardVerticalFact
                                iconCard={<RestaurantIcon className="fact-icon" style={{ fontSize: 80 }} />}

                                title="Plan nutricional"
                                descriptionItem={`Plan adaptado a tus necesidades y preferencias individuales ayudándote a maximizar el rendimiento físico, mejorar la recuperación post-entrenamiento y alcanzar tus metas de peso de forma saludable y sostenible.
                                    `}

                            />
                        </div>
                    </div>
                    {/*</Fade> */}
                </div>
            </div>


            <div className="hola-container">
                <div id="contacto" className="row hola-subcontainer">
                    <div className="col-12">
                        <h1>HOLA</h1>
                        <span className="sub-hola">¡Contacta conmigo hoy para comenzar tu transformación!</span>
                    </div>

                </div>


                <div id="contacto" className="row hola-subcontainerBody">

                    <hr className="thick-white-line"></hr>
                    <span className="sub-hola-contacto">
                        <MailOutlineIcon style={{ color: 'white', marginRight: '10px' }} />
                        Escríbenos a <br /><strong>hola@franciscoprietostudio.es</strong>
                    </span>
                    <hr className="thick-white-line"></hr>
                    <span className="sub-hola-contacto">
                        <LocalPhoneIcon style={{ color: 'white', marginRight: '10px' }} />
                        ¿Prefieres una conversación directa? <br />Llámanos al
                        <strong> 693 02 32 21</strong>
                    </span>

                    <div className="col-lg-12 info-hola">

                    </div>







                </div>
            </div>



            <div className="row holaNdReview-Section">

                <div className="col-lg-12 col-sm-10 background-dicenDeMi">
                    <div id="dicenDeMiSection" className="row">
                        <div className="dicenDeMi-Title">
                            <h1>DICEN DE MI</h1>
                        </div>
                        <div>
                            <CardReview />

                        </div>

                    </div>
                </div>



            </div>





        </HomeLayout >




    )
}
