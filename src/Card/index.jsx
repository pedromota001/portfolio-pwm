import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faFolderOpen,
    faBriefcase,
    faWrench,
    faCertificate
  } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import Ancora from "../Ancora";
import ListaCertificado from "../ListaCertificados";



const Card = (props) => {
    const icons = {
        "Sobre mim": faUser,
        "Projetos": faFolderOpen,
        "Experiência": faBriefcase,
        "Habilidades":faWrench,
        "Certificados" : faCertificate
    };

    const descricoes = {
        "Sobre mim" : "Pedro Mota, 19 anos, estudo na UNICAP e estagiário da Duo technology, onde desenvolvo como full stack, atualmente estou num projeto em MENDIX e tenho muita facilidade com linguagens de back-end como java e javascript",
        "Experiência" : "Estagiário na Duo Technology desde dez/2024, com atuação direta no desenvolvimento full stack de soluções web e mobile para locadoras de veículos, como a Foco Aluguel de Veículos.",
        "Habilidades" : "Perfil dinâmico, comunicativo e com facilidade para trabalho em equipe. Proativo, dedicado, com espírito de liderança e rápido aprendizado. Experiência em desenvolvimento web e inglês(nível pré-avançado)."
    };   

    const icon = icons[props.texto];

    const descricao = descricoes[props.texto];

    return(
        <div className="div-card" id={props.id}> 
            <div className="icon">
                <div className="icon-font-awesome">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <h1>{props.texto}</h1>
            </div>
            <div className="div-descricao-card">
                {props.texto === "Projetos" ?
                <>
                    <div className="div-descricao-card-links">
                        <div className="div-descricao-card-links-ancoras">
                            <div className="icon-ancora"><FontAwesomeIcon icon={faJava}/></div>
                            <Ancora url_title = "screenmatch"/>
                        </div>
                        <div className="div-descricao-card-links-ancoras">
                            <div className="icon-ancora"><FontAwesomeIcon icon={faJava}/></div>
                            <Ancora url_title = "SDGE"/>
                        </div>
                        <div className="div-descricao-card-links-ancoras">
                            <div className="icon-ancora"><FontAwesomeIcon icon={faReact}/></div>
                            <Ancora url_title = "cooelpe"/>
                        </div>
                        <div className="div-descricao-card-links-ancoras">
                            <div className="icon-ancora"><FontAwesomeIcon icon={faJava}/></div>
                            <Ancora/>
                        </div>
                    </div>
                </>
                : props.texto === "Certificados" ?
                    <>
                        <ListaCertificado/>
                    </> 
                : <p>
                    {descricao}
                </p>
                }
            </div>
        </div>
    )
}


export default Card