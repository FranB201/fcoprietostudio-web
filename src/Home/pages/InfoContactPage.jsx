import React from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import entradaCentro from '../../../src/assets/HomeImage/entradaCentro.jpg'
import "../styles/InfoContactPageStyle.css"
export const InfoContactPage = () => {
  return (
    <HomeLayout>
      <div>
        <div id="top" className="startRadial">

          <div className="row pb-5">

            <div className=" pt-5 ">
              <h2>Contacto</h2>
              <div className="centered-content">
                <h3>¿Aún con dudas?</h3>


              </div>
            </div>

            <div className="icons-line-nutrition">
          <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>call</span>
          <span style={{ color: 'white', fontSize: '24px', marginLeft: '10px' }}>+34 693 02 32 21</span> {/* Número de teléfono */}
          <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white', marginLeft: '30px' }}>email</span>
          <span style={{ color: 'white', fontSize: '24px', marginLeft: '10px' }}>hola@franciscoprietostudio.es</span> {/* Correo electrónico */}
        </div>


          </div>
          <div className='row'>


          <div className="background-sections-nutrition-borderless" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${entradaCentro})`,
              backgroundSize: 'cover',  // Cambiado a 'cover' para que la imagen cubra el espacio disponible sin distorsionar
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>

              <div class="container d-flex justify-content-center">
                  <div class="list-group mx-auto custom-width">
                      <a href="#" class="list-group-item list-group-item-action active">Horario del centro</a>
                      <a href="#" class="list-group-item list-group-item-action">Lunes: 8:00 - 18:00</a>
                      <a href="#" class="list-group-item list-group-item-action">Martes: 8:00 - 18:00</a>
                      <a href="#" class="list-group-item list-group-item-action">Miércoles: 8:00 - 18:00</a>
                      <a href="#" class="list-group-item list-group-item-action">Jueves: 8:00 - 18:00</a>
                      <a href="#" class="list-group-item list-group-item-action">Viernes: 8:00 - 18:00</a>
                      <a href="#" class="list-group-item list-group-item-action">Sábado: 9:00 - 14:00</a>
                      <a href="#" class="list-group-item list-group-item-action disabled">Domingo: Cerrado</a>
                  </div>
              </div>


            </div>


          </div>


        </div>

      </div>

    </HomeLayout>


  )
}
