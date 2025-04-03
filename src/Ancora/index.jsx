import "./ancora.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Ancora = (props) => {
    return(
        props.icon === 'github' ? ( 
            <a href="https://github.com/pedromota001" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icons"/>
            </a>
        ) : props.icon === 'linkedin' ? (
        <a href="https://www.linkedin.com/in/pedromotacarvalho/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icons"/>
        </a>
        ) : props.url_title === "screenmatch" ? (
            <a href="https://github.com/pedromota001/java-screenmatch-web" target="_blank">Back-end ScreenMatch(Spring) - portfólio de filmes via API</a>
        ) : props.url_title === "SDGE" ? (
            <a href="https://github.com/pedromota001/SDGE-application"target="_blank">SDGE - Sistema de gestão escolar (Spring)</a>
        ) : props.url_title === "cooelpe" ? (
            <a href="https://github.com/pedromota001/Cooelpe-Front-End"target="_blank">Aplicação React para empresa de energia privada</a>
        ) : <a href="https://github.com/pedromota001/DesafioScreenSound" target="_blank">Catálogo de músicas (back-end em Spring)</a>
    )
}

export default Ancora