import "./ancora.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Ancora = (props) => {
    return(
        props.icon === 'github' ? 
            <a href="https://github.com/pedromota001" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icons"/>
            </a>
        : 
        <a href="https://www.linkedin.com/in/pedromotacarvalho/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icons"/>
        </a>
    )
}

export default Ancora