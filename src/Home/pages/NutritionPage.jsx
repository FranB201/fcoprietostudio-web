import React from 'react'
import { HomeLayout } from "../layout/HomeLayout"
import '../../../src/Home/styles/NutritionPageStyle.css'; 


export const NutritionPage = () => {
    return (

        <HomeLayout>
            <div>
                <div id="top" className="startRadial">

                    <div className="row">

                        <div className=" pt-5 background-sections-nutrition">
                            <h1>NUTRICIÓN</h1>
                            <div className="centered-content">
                                <h3>Descubre el valor nutricional de los alimentos y como sacar ventaja de ello.</h3>
                                <button className="button-section">Empezar mi plan hoy!</button>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                    <div className=" pt-5 background-sections-nutrition-borderless">

                        
                    
                    </div>

                    </div>


                </div>

            </div>

        </HomeLayout>


    )
}
