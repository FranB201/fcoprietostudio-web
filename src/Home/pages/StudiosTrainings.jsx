
import { HomeLayout } from "../layout/HomeLayout";
import { CardVertical} from "../components";
import studioCard from "../../../src/assets/cardImages/studioCard.png";
import grupxpressCard from "../../../src/assets/cardImages/grupoXpresSala.jpg";
import personaltrainingCard from "../../../src/assets/cardImages/entrenamientoP.jpg";

export const StudiosTrainings = () => {
    return (
        <HomeLayout>
        <div className="container">
            <div className="row ">

            </div>
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
                    </div>       
            </div>
        </HomeLayout>

    )
}
