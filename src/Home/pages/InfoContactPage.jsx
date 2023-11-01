import React from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import entradaCentro from '../../../src/assets/HomeImage/entradaCentro.jpg'
import "../styles/InfoContactPageStyle.css"
export const InfoContactPage = () => {
  return (
    <HomeLayout>
      <div>
        <div id="top" className="startRadial">

          <div className="row">

            <div className=" p-5">
              <h2>Hola</h2>
              <div className="centered-content">

            <h4>Tu Salud y Condición Física es Nuestra Prioridad</h4>
              <p>
                  En nuestro centro, no somos simplemente un gimnasio. Somos un equipo integrado por Entrenadores, Nutricionistas, Quiromasajistas y Fisioterapeutas, comprometidos en ofrecer un entrenamiento personalizado que atiende tus necesidades individuales.
              </p>
              <p>
                  Nuestro enfoque no se basa en las tendencias pasajeras. En lugar de eso, nos tomamos el tiempo para escuchar y evaluar a cada cliente, garantizando así un plan adaptado a tus objetivos, todo ello en un entorno profesional y responsable.
              </p>
              <p>
                  Este compromiso se ve respaldado por más de 30 años de experiencia en el entrenamiento personal bajo la dirección de Francisco Prieto y nuestra constante búsqueda de formación y mejoramiento.
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
          <div className='row'>


          <div className="background-sections-nutrition-borderless" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${entradaCentro})`,
              backgroundSize: 'cover',  // Cambiado a 'cover' para que la imagen cubra el espacio disponible sin distorsionar
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>

              <div className="container d-flex justify-content-center mt-5">
                  <div className="list-group mx-auto custom-width mt-5">
                      <a href="#" className="list-group-item list-group-item-action active">Horario del centro</a>
                      <a href="#" className="list-group-item list-group-item-action">Lunes: 06:00am - 13:00pm | 17:00pm - 21:00pm</a>
                      <a href="#" className="list-group-item list-group-item-action">Martes: 06:00am - 13:00pm | 17:00pm - 21:00pm</a>
                      <a href="#" className="list-group-item list-group-item-action">Miércoles: 06:00am - 13:00pm | 17:00pm - 21:00pm</a>
                      <a href="#" className="list-group-item list-group-item-action">Jueves: 06:00am - 13:00pm | 17:00pm - 21:00pm</a>
                      <a href="#" className="list-group-item list-group-item-action">Viernes: 06:00am - 13:00pm | 17:00pm - 20:00pm</a>
                      <a href="#" className="list-group-item list-group-item-action">Sábado: Cerrado</a>
                      <a href="#" className="list-group-item list-group-item-action">Domingo: Cerrado</a>
                  </div>
              </div>


            </div>


          </div>


        </div>

      </div>

    </HomeLayout>


  )
}
