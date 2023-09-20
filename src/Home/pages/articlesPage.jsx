import React from 'react'
import { HomeLayout } from "../layout/HomeLayout"
import '../../../src/Home/styles/NutritionPageStyle.css';
import healthyFood from "../../../src/assets/nutritionImages/healthyFood.jpg";
import { Fade } from "react-awesome-reveal";

import { ModalForm } from '../components/ModalForm/ModalForm';



export const NutritionPage = () => {
    return (

        <HomeLayout>
            <div>
                <div id="top" className="startRadial">

                    <div className="row pb-5">

                        <div className=" pt-5 background-sections-nutrition">
                            <h2>Nutrición</h2>
                            <div className="centered-content">
                                <h3>Descubre el valor nutricional de los alimentos y como sacar ventaja de ello.</h3>
                                <ModalForm></ModalForm>



                            </div>
                        </div>
                        <div className="icons-line-nutrition">
                            <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>body_fat </span>
                            <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>nutrition</span>
                            <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>settings_accessibility</span>
                            <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>checklist_rtl</span>
                            <span className="material-symbols-outlined" style={{ fontSize: 60, color: 'white' }}>query_stats</span>

                        </div>


                    </div>
                    <div className='row'>


                        <div className=" pt-5 background-sections-nutrition-borderless" style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${healthyFood})`,
                            backgroundSize: '100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}>

                            <h2>¿Cómo funciona?</h2>

                            <div className="steps-container">

                                    <div className='row steps-nutrition-card'>
                                        <div className="step-card">
                                            <div className="step-number">1</div>
                                            <div className="step-text">Entrevista y analisis inicial para conocer tus necesidades y objetivos.</div>
                                        </div>
                                    </div>


                                    <div className='row steps-nutrition-card'>
                                        <div className="step-card">
                                            <div className="step-number">2</div>
                                            <div className="step-text">Elaboramos tu plan nutricional en un periodo de 24h a 48h.</div>
                                        </div>
                                    </div>


                                    <div className='row steps-nutrition-card'>
                                        <div className="step-card">
                                            <div className="step-number">3</div>
                                            <div className="step-text">Recibes un email detallado del analisis con la dieta y el acceso a nuestra aplicación movil.</div>
                                        </div>
                                    </div>


                            </div>

                        </div>


                    </div>


                </div>

            </div>

        </HomeLayout>


    )
}
