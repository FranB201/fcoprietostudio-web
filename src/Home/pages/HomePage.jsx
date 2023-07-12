
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical, CardReview, CardVerticalFact, Carousel, ComingSoonVideos, HeaderImage } from "../components"
import studioCard from "../../../src/assets/cardImages/studioCard.png"
import manzanaabs from "../../../src/assets/cardImages/manzanaabs.png"
import PASTILLARETO from "../../../src/assets/cardImages/PASTILLARETOsinfondo.png"
import WarningIcon from '@mui/icons-material/Warning';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Fade } from "react-awesome-reveal";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import cambioFisico1 from "../../../src/assets/physicChange/cambioFisico1.png"
import collageStudio from "../../../src/assets/studioImages/videosCollage.png"
import videoPresentation from "../../../src/assets/video/presentationStudio.mp4"
import { Link } from 'react-router-dom';






export const HomePage = () => {
    return (

        <HomeLayout>


            <HeaderImage title="Ángel Di Maria dijo..." motivationText="El dolor pasa, el sudor se seca, el cansancio termina. 
            Pero hay algo que nunca desaparecerá: la satisfacción de haberlo logrado."
                presentation1="SOY FRANCISCO PRIETO Y VAMOS A LOGRARLO JUNTOS."
/*                 presentation2="Y si tú quieres te ayudaré a que tú también lo logres."
 */                buttonText="Unete ahora"></HeaderImage>

            <div>
                <div id="top" className="startRadial">

                    <div className="row">

                        <div className="col-6 pt-5 background-sections">
                            <h2>Entrenamientos Presenciales</h2>
                            <div className="centered-content">
                                <span>Descubre cómo puedes transformar tu cuerpo y tu salud.</span>
                                <Link to="/studiotrainings">
                                    <button className="button-section">Saber más</button>
                                </Link>
                            </div>
                            <video
                                    autoPlay
                                    loop
                                    muted
                                    style={{
                                        marginLeft:"30px",
                                        width: "90%",
                                        borderRadius: "20px"
                                    }} // Asegúrate de establecer el ancho y el alto como lo desees
                                >
                                    <source src={videoPresentation} type="video/mp4" />
                                    Tu navegador no soporta el elemento de video.
                                </video>

                        </div>


                        <div className="col-6 pt-5 background-sections">
                            <h2>Encuentra tu Entrenamiento</h2>
                            <div className="centered-content">
                                <span>Rutinas de ejercicios personalizados para casa, gimnasio o al aire libre</span>
                                <button className="button-section">Ver Videos</button>

                                <img className="collage-img" src={collageStudio} alt="" />

                            </div>

                        </div>


                    </div>

                    <div className="row">

                        <div className="col-6 pt-5 background-sections">
                            <h2>Programas y Retos</h2>
                            <div className="centered-content">
                                <span>¡Únete a nosotros y acepta el desafío de llevar tu forma física al siguiente nivel!</span>
                                <Link to="/challengesPage">

                                    <button className="button-section">¡Me apunto!</button>
                                </Link>
{/*                                 <img className="retos-img" src={PASTILLARETO} alt="" style={{ width: 400, marginTop:1}} />
 */}                                <img className="cambio-img" src={cambioFisico1} alt="" />

                            </div>
                        </div>

                        <div className="col-6  pt-5 background-sections">
                            <h2>Nutrición</h2>
                            <div className="centered-content">
                                <span>Complementa tu rutina de entrenamiento con nuestro enfoque integral de nutrición. </span>
                                <Link to="/nutricion">

                                    <button className="button-section">Saber más</button>
                                </Link>
                                <img className="nutritionImg background-sections-img" src={manzanaabs} alt="" style={{ width: 300 }} />

                            </div>
                        </div>


                    </div>

                    <div className="row">

                        <div className="col-6  pt-5 background-sections">
                            <h2>ARTICULOS</h2>
                            <div className="centered-content">

                                <span>Recursos diseñados para proporcionarte un apoyo constante en tu viaje hacia la salud y la forma física</span>

                                <button className="button-section">Descubrir</button>
                            </div>


                        </div>


                        <div className="col-6 pt-5 background-sections">
                            <h2>DICEN DE MI</h2>
                            <div className="centered-content">

                                <span>Porque nos encantan los comentarios de nuestros clientes</span>

                                <div>
                                    <CardReview />

                                </div>

                            </div>

                        </div>


                    </div>


















                    {/*         <div id="comoEmpezar" className="row pt-5">
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
                                title="Entrenamiento personal"
                                descriptionItems={[
                                    "Entrenamiento personalizado 100%",
                                    "Resultado garantizado",
                                    "Revisiones constantes",
                                    "Plan nutricional incluido",
                                ]}
                            />
                        </div>
                    </div> */}

                </div>

            </div>
            {/*           <div className="encuentraTuEntrenamiento-container">
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


            </div> */}
            {/*   <div>

                <div className="facts-container rezise ">

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
                </div>
            </div>
 */}

            {/*   <div className="hola-container">
                <div id="contacto" className="row hola-subcontainer">
                    <div className="col-12">
                        <h1>HOLA</h1>
                        <span className="sub-hola">¡Contacta conmigo hoy para comenzar tu transformación!</span>
                    </div>
                </div>

                <div id="contacto" className="row hola-subcontainerBody">
                    <div className="col-lg-12 hola-img-container">

                        <Carousel />

                    </div>
                    <div className="col-lg-12 info-hola">
                        <hr className="thick-white-line"></hr>
                        <span className="sub-hola-contacto">
                            <MailOutlineIcon style={{ color: 'white', marginRight: '10px' }} />
                            ¿Necesitas más información? Escríbenos a <br /><strong>hola@franciscoprietostudio.es</strong>
                        </span>
                        <hr className="thick-white-line"></hr>
                        <span className="sub-hola-contacto">
                            <LocalPhoneIcon style={{ color: 'white', marginRight: '10px' }} />
                            ¿Prefieres una conversación directa? <br />Llámanos al
                            <strong> 693 02 32 21</strong>
                        </span>
                    </div>







                </div>
            </div> */}


            {/* 
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
 */}




        </HomeLayout>




    )
}
