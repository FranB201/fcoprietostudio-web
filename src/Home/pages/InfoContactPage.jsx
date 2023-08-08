import React from 'react'
import { HomeLayout } from '../layout/HomeLayout'
import entradaCentro from '../../../src/assets/HomeImage/entradaCentro.jpg'

export const InfoContactPage = () => {
  return (
    <HomeLayout>
      <div>
        <div id="top" className="startRadial">

          <div className="row pb-5">

            <div className=" pt-5 background-sections-nutrition">
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


            <div className=" pt-5 background-sections-nutrition-borderless" style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${entradaCentro})`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}>

              <h2>Horario del centro</h2>
              <table>
                <tbody>
                  <tr>
                    <td>Lunes</td>
                    <td>8:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Martes</td>
                    <td>8:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Miércoles</td>
                    <td>8:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Jueves</td>
                    <td>8:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Viernes</td>
                    <td>8:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>Sábado</td>
                    <td>9:00 - 14:00</td>
                  </tr>
                  <tr>
                    <td>Domingo</td>
                    <td>Cerrado</td>
                  </tr>
                </tbody>
              </table>

            </div>


          </div>


        </div>

      </div>

    </HomeLayout>


  )
}
