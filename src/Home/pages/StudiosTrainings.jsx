import { HomeLayout } from "../layout/HomeLayout";
import { CardVertical } from "../components";
import studioCard from "../../../src/assets/cardImages/studioCard.png";
import grupxpressCard from "../../../src/assets/cardImages/grupoXpresSala.jpg";
import personaltrainingCard from "../../../src/assets/cardImages/entrenamientoP2.jpg";
import studio1 from "../../../src/assets/backgrounds/studio1.jpg";
import appStudio from "../../../src/assets/nutritionImages/appStudio.png";
import sixtyDays from "../../../src/assets/cardImages/PASTILLARETOsinfondo.png";
import "../../../src/Home/styles/StudiosTrainingStyle.css";
import { FormOnly } from "../components/ModalForm/FormOnly";

export const StudiosTrainings = () => {
  return (
    <HomeLayout>
      <div className="startRadial">
        
          <div id="comoEmpezar" className="row">
            <div className="col-12 mt-lg-5 h1CardverticalS">
              <h2>Entrenamientos Presenciales</h2>
            </div>
          </div>
          <div className="row  mt-lg-5 card-section">
            <div id="studio" className="col-lg-3 col-md-6 col-sm-12">
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
            <div
              id="grupoxpress"
              className="col-lg-3 col-md-6  col-sm-12 cardVertical-Container"
            >
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
            <div id="personaltraining" className="col-lg-3 col-md-6 col-sm-12">
              <CardVertical
                imageUrl={personaltrainingCard}
                title="Entrenamiento Personal"
                descriptionItems={[
                  "Entrenamiento personalizado 100%",
                  "Resultado garantizado",
                  "Revisiones constantes",
                  "Plan nutricional incluido"
                ]}
              />
            </div>
            <div id="personaltraining" className="col-lg-3 col-md-6 col-sm-12">
              <CardVertical
                imageUrl={sixtyDays}
                title="Entrenamiento Personal"
                descriptionItems={[
                  "Entrenamiento personalizado 100%",
                  "Resultado garantizado",
                  "Revisiones constantes",
                  "Plan nutricional incluido"
                ]}
              />
            </div>
          </div>
        

        <div
          className="row"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${studio1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        >
          <div className="col-md-6 texto-section-app">
            <h2>Lleva un seguimiento de tus progresos con nuestra App</h2>
            <p>
              {"Con nuestra app, tendrás acceso a tus planes de entrenamiento personalizados, podrás hacer un seguimiento de tus progresos y ver tus mejoras en tiempo real.\n\nAdemás, te mantendrás al día con los horarios de todas las actividades del centro, para que nunca te pierdas una sesión.\n\nLa aplicación es fácil de usar y te permite tener el control total de tu entrenamiento en la palma de tu mano.\n\n¡Empieza hoy mismo a maximizar tus resultados y a vivir una vida más saludable y activa!"
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <img
              src={appStudio}
              alt="Descripción de la imagen"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="mt-5" id="form-contact">
          <FormOnly />
        </div>
      </div>
    </HomeLayout>
  );
};
