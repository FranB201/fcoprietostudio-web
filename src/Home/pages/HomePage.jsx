import { Typography } from "@mui/material"
import { HomeLayout } from "../layout/HomeLayout"
import { CardVertical, CardReview } from "../components"
import video from "../../../src/assets/video/videoInicio.mp4"
import studioCard from "../../../src/assets/cardImages/studioCard.png"
import grupxpressCard from "../../../src/assets/cardImages/grupxpressCard.png"
import personaltrainingCard from "../../../src/assets/cardImages/personaltrainingCard.png"
import proximamente from "../../../src/assets/cardImages/proximamente.png"
import HomeImg3 from "../../../src/assets/HomeImage/HomeImg3.png"
import WarningIcon from '@mui/icons-material/Warning';




export const HomePage = () => {
    return (

        <HomeLayout>

            <div className="homeImg-container" style={{ backgroundImage: `url(${HomeImg3})` }}> 
                <div className="motivationSentence">
                    <span> el dolor pasa, el sudor seca, el cansancio termina. Pero hay algo que nunca desaparecerá: la satisfacción de haberlo logrado. </span>
                </div>
            </div>


            <div className="background-sections">
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
            <div className="background-sections">
                <div id="entrenamientos" className="row">
                    <div className="col-12  h1EncuentraTu">
                        <h1>ENCUENTRA TU ENTRENAMIENTO</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 banner-container">
                        <div className="image-container">
                            {/* <img src={proximamente} alt="Imagen de entrenamiento" /> */}

                        </div>
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
                        <CardReview/>
                
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
