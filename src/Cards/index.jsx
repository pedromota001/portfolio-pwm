import Card from "../Card"
import "./cards.css"

const Cards = (props) => {
    return(
        <div className="div-cards">
            {props.lista_cards.map((texto, index) => <Card texto={texto} key={index}/>)}
        </div>
    )
}

export default Cards