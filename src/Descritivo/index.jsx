import "./descritivo.css"
import { Link } from "react-router-dom"

const Descritivo = ()  => {
    return(
        <div className="div-informacoes">
            <h1>Pedro Mota</h1>
            <h2>Desenvolvedor full stack</h2>
            <button
                onClick={() => window.location.href = "/senha"}
            >     
                Cows and bulls
            </button>
        </div>
    )   
}

export default Descritivo