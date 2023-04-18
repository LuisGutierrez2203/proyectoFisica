import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

import Base from '../Base/Base.jsx'

import './CaidaLibre.scss'

import Cilindro from '../../src/assets/cilindro.png'
import Esfera from '../../src/assets/esfera.png'



const Entradas = ({po_cilindro, setpo_cilindro, po_esfera, setpo_esfera}) => {
    return (
        <div>
            <button onClick={() =>{
                if(document.getElementById("mascara").clientHeight > (po_cilindro.y + 80)){
                    setpo_cilindro({x:po_cilindro.x, y:po_cilindro.y+10});
                    setpo_esfera({x:po_esfera.x, y:po_esfera.y+10})

                }



            }}>Mover cilindro</button>

            <input type="range" className="form-range" min="-5" max="5" id="customRange2"/>

            
        </div>
    )
}


const Salidas = () => {
    
    return (
        <h1>Salidas</h1>
    )
}

const Simulacion = ({po_cilindro, po_esfera}) => {
    
    console.log(po_cilindro);
    

    return (
        <React.Fragment>
            <img 
                style = {{transform: `translate(${po_esfera.x}px, ${po_esfera.y}px)`}}
                src = {Esfera} 
                id = "esfera"/>

            <img 
                style = {{transform: `translate(${po_cilindro.x}px, ${po_cilindro.y}px)`}}
                src = {Cilindro} 
                id = "cilindro"/>
    


        </React.Fragment>



    )
}

export default function CaidaLibre(){
    var [po_esfera, setpo_esfera] = useState({x:45, y: 65});
    var [po_cilindro, setpo_cilindro] = useState({x:30, y:50});

    return(

      

        <React.Fragment>
            <Base
                Simulacion={<Simulacion 
                    po_cilindro={po_cilindro}
                    
                    po_esfera={po_esfera}
                    
                    
                />}
                Entradas={<Entradas 
                    po_cilindro={po_cilindro}
                    setpo_cilindro={setpo_cilindro}
                    po_esfera={po_esfera}
                    setpo_esfera={setpo_esfera}
                />}
                Salidas={<Salidas />}
            >
            </Base>
        </React.Fragment>





    )




}

