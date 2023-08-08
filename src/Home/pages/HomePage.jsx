
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
import collageStudio from "../../../src/assets/studioImages/collage2.png"
import Newsletter from "../../../src/assets/articlesImages/Newsletters.png"
import videoPresentation from "../../../src/assets/video/presentationStudio.mp4"
import { Link } from 'react-router-dom';






export const HomePage = () => {
    return (

        <HomeLayout>


            <HeaderImage title="Ángel Di Maria dijo..." motivationText="El dolor pasa, el sudor se seca, el cansancio termina. 
            Pero hay algo que nunca desaparecerá: la satisfacción de haberlo logrado."
                presentation1="SOY FRANCISCO PRIETO Y VAMOS A LOGRARLO JUNTOS."
                buttonText="Unete ahora"></HeaderImage>

            <div>
                <div id="top" className="startRadial">

                    <div className="row">

                        <div className="col-6 pt-5 background-sections">
                            <h2>Entrenamientos Presenciales</h2>
                            <div className="centered-content">
                                <Link to="/studiotrainings">
                                    <button className="button-section">Saber más</button>
                                </Link>
                            </div>
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    marginLeft: "30px",
                                    width: "90%",
                                    borderRadius: "20px"
                                }} // Asegúrate de establecer el ancho y el alto como lo desees
                            >
                                <source src={videoPresentation} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>

                        </div>


                        <div className="col-6 pt-5 background-sections">
                            <h2>Encuentra Tu Entrenamiento</h2>
                            <div className="centered-content">
                                <Link to="/videostrainings">
                                    <button className="button-section">Ver Videos</button>
                                </Link>

                                <img className="collage-img" src={collageStudio} alt="" />

                            </div>

                        </div>


                    </div>

                    <div className="row">

                        <div className="col-6 pt-5 background-sections">
                            <h2>Programas</h2>
                            <div className="centered-content">
                                <Link to="/challengesPage">

                                    <button className="button-section">Descubrir</button>
                                </Link>
                                {/*                                 <img className="retos-img" src={PASTILLARETO} alt="" style={{ width: 400, marginTop:1}} />
 */}                                <img className="cambio-img" src={cambioFisico1} alt="" />

                            </div>
                        </div>

                        <div className="col-6  pt-5 background-sections">
                            <h2>Nutrición</h2>
                            <div className="centered-content">
                                <Link to="/nutricion">

                                    <button className="button-section">Saber más</button>
                                </Link>
                                <img className="nutritionImg background-sections-img" src={manzanaabs} alt="" style={{ width: 300 }} />

                            </div>
                        </div>


                    </div>

                    <div className="row">

                        <div className="col-6  pt-5 background-sections-articles">
                            <h2>Artículos</h2>
                            <div className="centered-content">


                                <button className="button-section">Descubrir</button>
                            </div>

                            <img className="background-sections-img" src={Newsletter} alt="" style={{ width: 500 }} />


                        </div>


                        <div className="col-6 pt-5 background-sections-articles" id="Dicen-De-Mi">
                            <h2>Dicen De Mi</h2>
                            <div className="centered-content">


                                <div className="reviews">
                                    <CardReview />

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </HomeLayout>




    )
}
