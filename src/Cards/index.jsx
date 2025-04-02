import Botao from "../Botao"
import Card from "../Card"
import "./cards.css"
import React from 'react';


const Cards = (props) => {
    return(
        <div className="div-cards">
            {props.lista_cards.map((texto, index) => 
               <div key={index} className="div-cards-card">
                    <Botao texto={texto} />
                    <Card texto={texto} />
               </div>
            )}
        </div>
    )
}

export default Cards