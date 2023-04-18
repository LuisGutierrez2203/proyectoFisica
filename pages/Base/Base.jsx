import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './Base.scss'
import Play from '../../src/assets/play.png'
function Base ({Simulacion, Entradas, Salidas}){
    return (
        <div id = "Panel_principal">
            <div id="Panel_laboratorio" className="row">
                <div id = "mascara">
                    {Simulacion}
                </div>

            </div>

            <div id="Panel_datos" className='container-fluid'>
                <div className="row" >
                    <div className="col-6" id = "Panel_input">
                        <div className='row' >
                            <div className='col-3 contorno'>
                                <span className = "title_panel">Entradas</span>
                            </div>

                            <div className='col-9 borde-r'>
                                
                            </div>

                        </div>
                        <div className='row section-datos'>
                           {Entradas}
                        </div>
                    </div>

                    <div className = "col-1" id = "Panel_btn">
                        <button className='btn-img' id="play"></button>
                        <button className='btn-img' id="stop"></button>
                        <button className='btn-img'></button>
                        <button className='btn-img'></button>
                    </div>

                    <div className="col-4 " id = "Panel_output">
                            <div className='row' >
                                <div className='col-4 contorno'>
                                    <span className = "title_panel">Salidas</span>
                                </div>

                                <div className='col-8 borde-r'>

                                </div>
                            </div>

                            <div className='row section-datos'>
                                {Salidas}
                            </div>
                            
                    </div>

                </div>                

            </div>



            
        </div>



    )
}

export default Base;