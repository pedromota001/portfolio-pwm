import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Card = (props) => {
    return(
        <div className="div-card"> 
            <div className="icon">
                <h1>{props.texto}</h1>
                <div className="icon-user"><FontAwesomeIcon icon={faUser}/></div>
            </div>
            <div className="div-descricao-card">
                <p>
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}


export default Card