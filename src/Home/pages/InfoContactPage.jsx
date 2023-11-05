import React from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import entradaCentro from '../../../src/assets/HomeImage/entradaCentro2.png'
import "../styles/InfoContactPageStyle.css"
export const InfoContactPage = () => {
  return (
    <HomeLayout>
      <div>
        <div id="top" className="startRadial">

          <div className="row">

            <div className=" p-5">
              <h2>Tu Salud y Condición Física es Nuestra Prioridad</h2>
              <div className="centered-content">

{/*                 <h4>Tu Salud y Condición Física es Nuestra Prioridad</h4>
 */}                <p>
                  En <strong>FranciscoPrieto Studio</strong>, nuestra pasión es la actividad física y el deporte, y eso se refleja en nuestro compromiso contigo. No somos simplemente un gimnasio, somos un <strong>Centro Integral de Entrenamiento Personal</strong> donde la experiencia y la personalización son la esencia de nuestro servicio.
                </p>
                <p>
                  Dirigido por <strong>Francisco Prieto</strong>, un profesional con formación en fisicoculturismo y musculación desde 1987 y entrenamiento personal desde 1991, nuestro centro cuenta con más de 30 años de experiencia. Francisco no solo ha ayudado a clientes a alcanzar sus metas, sino que también ha competido al más alto nivel, organizado eventos significativos y formado a cientos de instructores.
                </p>
                <p>
                  Somos un equipo integrado por <strong>Entrenadores, Nutricionistas y Fisioterapeutas</strong>, todos trabajando unidos para ofrecerte un servicio personalizado y completo. Nos tomamos el tiempo para escuchar y evaluar tu situación individual y diseñamos un entrenamiento a medida de la forma más profesional y responsable posible.
                </p>
                <p>
                  Nos enorgullece nuestro enfoque único, lejos de modas y tendencias pasajeras, orientado en resultados a largo plazo. La pasión de Francisco por el aprendizaje y la mejora continua se traduce en una oferta educativa de calidad para nuestros clientes y su constante crecimiento personal y físico.
                </p>
                <p>
                  Con <strong>FranciscoPrieto Studio</strong>, te acompañamos en cada paso de tu camino hacia el éxito, asegurándonos de que cada aspecto de tu salud y condición física sea atendido con la máxima calidad y atención personal.
                </p>

              </div>

            </div>

            {/*       <div className="icons-line-nutrition">
          <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>call</span>
          <span style={{ color: 'white', fontSize: '24px', marginLeft: '10px' }}>+34 693 02 32 21</span> 
          <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white', marginLeft: '30px' }}>email</span>
          <span style={{ color: 'white', fontSize: '24px', marginLeft: '10px' }}>hola@franciscoprietostudio.es</span>
        </div> */}


          </div>
          <div class='row'>
            <div class="background-sections-nutrition-borderless" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${entradaCentro})`,
              backgroundSize: 'cover',  
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>
              <div class="container d-flex justify-content-center mt-5">
                <div class="list-group mx-auto custom-width mt-5">
                  <div class="list-group-item-header">Horario del centro</div>
                  <div class="list-group-item">Lunes: 06:00am - 13:00pm | 17:00pm - 21:00pm</div>
                  <div class="list-group-item">Martes: 06:00am - 13:00pm | 17:00pm - 21:00pm</div>
                  <div class="list-group-item">Miércoles: 06:00am - 13:00pm | 17:00pm - 21:00pm</div>
                  <div class="list-group-item">Jueves: 06:00am - 13:00pm | 17:00pm - 21:00pm</div>
                  <div class="list-group-item">Viernes: 06:00am - 13:00pm | 17:00pm - 20:00pm</div>
                  <div class="list-group-item disabled">Sábado: Cerrado</div>
                  <div class="list-group-item disabled">Domingo: Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </HomeLayout>


  )
}
