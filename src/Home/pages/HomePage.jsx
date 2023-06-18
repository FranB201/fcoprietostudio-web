import { Typography } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical, CardReview } from "../components"
import studioCard from "../../../src/assets/cardImages/studioCard.png"
import grupxpressCard from "../../../src/assets/cardImages/grupxpressCard.png"
import personaltrainingCard from "../../../src/assets/cardImages/personaltrainingCard.png"
import proximamente from "../../../src/assets/cardImages/proximamente.png"
import HomeImg3 from "../../../src/assets/HomeImage/HomeImg5.png"
import WarningIcon from '@mui/icons-material/Warning';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




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
                    <div id="comoEmpezar" className="row">
                        <div className="col-12 mt-5 h1Cardvertical">
                            <h1>PROGRAMAS PRESENCIALES</h1>
                        </div>
                    </div>
                    <div className="row gx-1 card-section" >
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
                        <div id="grupoxpress" className="col-lg-4 col-md-6 col-sm-12">
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
                <div id="entrenamientos" className="row">
                    <div className="col-12  h1EncuentraTu">

                        <div className="row">
                            <div className="col-lg-6">
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


                            <div className="col-lg-6 col-md-12 col-sm-12 img-text">
                                <div className="motivation-text-encuentraTuEnt title-img-text">
                                    Ejercicios
                                </div>
                                <span className="motivationSentence motivation-text-encuentraTuEnt">ENCUENTRA TU ENTRENAMIENTO</span>
                                <div className="motivation-text-encuentraTuEnt footer-img-text-encuentraT">
                                    Bienvenidos a nuestra sección de videos de entrenamiento personal. Aquí encontrarás una amplia gama de rutinas de ejercicios diseñadas para adaptarse a tus necesidades y preferencias, ya sea que te encuentres en casa, en el gimnasio o al aire libre..
                                    <br></br>
                                    Así que no importa si tu objetivo es aumentar tu fuerza, mejorar tu resistencia, perder peso, o simplemente sentirte más enérgico y saludable, <br></br>¡estamos aquí para ayudarte en tu viaje!

                                </div>

                            </div>


                        </div>


                    </div>
                </div>

            
            </div>
            <div id="factServices" className="row">
                <div className="col-12 facts-container">

                    <div>

                        
                    </div>


                </div>

            </div>




            <div className="row holaNdReview-Section">
                <div className="background-sections col-lg-6 col-sm-10 background-Hola">
                    <div id="holaSection" className="row">
                        <div className="h1EncuentraTu">
                            <h1>HOLA</h1>

                            <div className="row m-5">
                                <span className="HolaTxtDescription">"Somos un centro de entrenamiento personal cuya preocupación es la satisfacción
                                    de nuestros clientes en cuanto a salud y condición física se refiere.
                                    No somos un gimnasio. Entrenadores, Nutricionista, Quiromasajista y Fisioterapeuta
                                    trabajamos unidos y en perfecta comunicación para garantizar siempre el mejor resultado.
                                    No hacemos lo que está de moda o lo que se lleva. Escuchamos a nuestros clientes en
                                    una entrevista inicial, evaluamos su situación personal y hacemos lo que entendemos que
                                    necesitan para ayudarles a conseguir su objetivo de la forma más profesional y responsable
                                    posible. Y esto es así gracias a nuestro afán de formación continua y a los
                                    más de 30 años de experiencia en el mundo del entrenamiento personal de Francisco Prieto"</span>

                            </div>

                        </div>


                    </div>
                </div>
                <div className="background-sections col-lg-6 col-sm-10 background-dicenDeMi">
                    <div id="holaSection" className="row">
                        <div className="h1EncuentraTu">
                            <h1>DICEN DE MI</h1>
                        </div>
                        <CardReview />

                    </div>
                </div>



            </div>



            <div className="background-sections">
                <div id="contacto" className="row">
                    <div className="h1EncuentraTu">
                        <h1>CONTACTO</h1>

                    </div>



                </div>
            </div>

        </HomeLayout>




    )
}
