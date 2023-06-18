
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
                                <div className="row">
                                    <div className="col">
                                        <div className="motivation-text-encuentraTuEnt title-img-text">
                                            Ejercicios

                                            <div className="lineStyle" />
                                        </div>

                                    </div>
                                </div>
                                <div className="motivationSentence motivation-text-encuentraTuEnt">ENCUENTRA TU ENTRENAMIENTO</div>
                                <div className="motivation-text-encuentraTuEnt footer-img-text-encuentraT">
                                    <p style={{ fontWeight: 'bold' }}>Bienvenidos a nuestro <span style={{ color: '#EFF6E0' }}>portal de entrenamiento personal</span>.</p>
                                    <p>Descubre <span style={{ color: '#EFF6E0', fontWeight: 'bold' }}>rutinas de ejercicios personalizadas</span> para cualquier lugar: casa, gimnasio o al aire libre.</p>
                                    <p>No importa si buscas ganar fuerza, aumentar la resistencia, perder peso, o simplemente impulsar tu energía y bienestar.</p>
                                    <p style={{ fontWeight: 'bold' }}>¡Estamos para apoyarte en tu <span style={{ color: '#EFF6E0' }}>viaje hacia la salud y la fitness</span>!</p>

                                </div>

                            </div>


                        </div>


                    </div>
                </div>


            </div>
            <div>

                <div className="facts-container rezise p-5">

                        <Fade direction="up" triggerOnce={true} fraction={0.3} className="fade-element">

                        <div className="row cardFact-section " >
                            <div id="experience" className="col-lg-4 col-md-6 col-sm-12">
                                <CardVerticalFact
                                    icon={<WorkspacePremiumIcon className="fact-icon" style={{ fontSize: 80 }} />}

                                    title="Experiencia"
                                    descriptionItems={[
                                        "No somos un gimnasio. Entrenadores, Nutricionista,",
                                        " Quiromasajista y Fisioterapeuta trabajamos unidos ",
                                        "y en perfecta comunicación para garantizar siempre ",
                                        " el mejor resultado.",
                                        <br></br>,
                                        <br></br>,


                                    ]}
                                />
                            </div>
                            <div id="interview" className="col-lg-4 col-md-6 col-sm-12 interview-card">
                                <CardVerticalFact
                                    icon={<AssignmentIndIcon className="fact-icon" style={{ fontSize: 80 }} />}
                                    title="Entrevista inicial"
                                    descriptionItems={[
                                        "Escuchamos a nuestros clientes",
                                        "en una entrevista incial, evaluamos",
                                        "su situación personal y hacemos lo que",
                                        "entendemos que necesitasn para ayudarles",
                                        " a conseguir su objetivo.",
                                        <br></br>,
                                        <br></br>

                                    ]}
                                />
                            </div>
                            <div id="personaltraining" className="col-lg-4 col-md-6 col-sm-12">
                                <CardVerticalFact
                                    icon={<RestaurantIcon className="fact-icon" style={{ fontSize: 80 }} />}

                                    title="Plan nutricional"
                                    descriptionItems={[
                                        "Plan adaptado a tus necesidades y preferencias individuales ayudándote a maximizar el rendimiento físico, mejorar la recuperación post-entrenamiento y alcanzar tus metas de peso de forma saludable y sostenible."
                                    ]}
                                />
                            </div>
                        </div>

                    </Fade>

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
