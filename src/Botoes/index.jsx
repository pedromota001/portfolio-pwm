import Botao from "../Botao"
import "./Botoes.css"

const Botoes = (props) =>{
    return(
        <div className="div-botoes">
            {props.lista_botoes.map((texto, index) => <Botao texto = {texto} key={index}/>)}
        </div>
    )
}


export default Botoes