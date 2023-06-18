
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical, CardReview, CardVerticalFact } from "../components"
import studioCard from "../../../src/assets/cardImages/studioCard.png"
import grupxpressCard from "../../../src/assets/cardImages/grupxpressCard.png"
import personaltrainingCard from "../../../src/assets/cardImages/personaltrainingCard.png"
import HomeImg3 from "../../../src/assets/HomeImage/HomeImg5.png"
import WarningIcon from '@mui/icons-material/Warning';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Fade } from "react-awesome-reveal";





export const HomePage = () => {
    return (

        <HomeLayout>

            {/*  <div className="homeImg-container" style={{ 
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 28%, rgba(16,78,102,0.2) 40%, rgba(34,85,111,0.2) 40%, rgba(41,99,129,0.3) 50%, rgba(88,123,143,1)
                    80%), url(${HomeImg3})`}}> */}



            <div className="homeImg-container" style={{ backgroundImage: `url(${HomeImg3})` }}>
                <div className="col-lg-6 col-md-12 col-sm-12 img-text">
                    <div className="motivation-text title-img-text">
                        Ángel Di Maria dijo:
                    </div>
                    <span className="motivationSentence motivation-text">  'El dolor pasa, el sudor se seca, el cansancio termina. Pero hay algo que nunca desaparecerá: la satisfacción de haberlo logrado.'  </span>
                    <div className="motivation-text footer-img-text">
                        Soy Francisco Prieto y entreno gente.
                    </div>
                    <div >
                        <a className="join-now text-button-motivation-text">
                            <span className="text-button-join-now">unete ahora</span>

                            <ArrowRightAltIcon fontSize="large" />
                        </a>
                    </div>
                </div>

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
                                title="Studio"
                                descriptionItems={[
                                    "Instalaciones totalmente equipadas",
                                    "Tecnología de última generación en fitness",
                                    "Ambiente motivador y enérgico",
                                    "Métodos de entrenamiento innovadores"
                                ]}
                            />
                        </div>
                        <div id="grupoxpress" className="col-lg-4 col-md-6  col-sm-12 cardVertical-Container">
                            <CardVertical
                                imageUrl={grupxpressCard}
                                title="Grupo Xpress"
                                descriptionItems={[
                                    "Clases grupales divertidas y desafiantes",
                                    "Enfoque integral en salud y bienestar",
                                    "Instructores profesionales",
                                    "Programas de entrenamientos versátiles"

                                ]}
                            />
                        </div>
                        <div id="personaltraining" className="col-lg-4 col-md-6 col-sm-12">
                            <CardVertical
                                imageUrl={personaltrainingCard}
                                title="Entrenamiento personal"
                                descriptionItems={[
                                    "Entrenamiento personalizado a tu medida",
                                    "Tecnología de última generación en fitness",
                                    "Resultados garantizados",
                                    "Controles de progresos periódicos",
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

                            <div className="col-lg-6 col-md-12 col-sm-12 img-text img-text-find">
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
                                        <div className="motivation-text-encuentraTuEnt footer-img-text-encuentraT">
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

                <div className="facts-container rezise p-5">

{/*                     <Fade direction="up" triggerOnce={true} fraction={0.6} className="fade-element">
 */}
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
                                <CardVerticalFact sx={{height:900}}
                                    iconCard={<AssignmentIndIcon className="fact-icon" style={{ fontSize: 80 }} />}
                                    title="Entrevista inicial"
                                    descriptionItem={`Escuchamos a nuestros clientes, en una entrevista incial, evaluamos
                                    su situación personal y hacemos lo que entendemos que necesitasn para ayudarles
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

{/*                     </Fade>
 */}
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
                    <div className="col-lg-6 hola-img-container">
                        <img className="hola-img-info" src="src/assets/infoImage/fisicocultirismo-francisco-prieto-studio.jpg"></img>

                    </div>
                    <div className="col-lg-6">
                        <hr className="thick-white-line"></hr>
                        <span className="sub-hola-contacto">¿Aún con dudas?, escribenos al email</span>
                        <hr className="thick-white-line"></hr>
                        <span className="sub-hola-contacto">¿Aún con dudas?, escribenos al email</span>

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





        </HomeLayout>




    )
}
