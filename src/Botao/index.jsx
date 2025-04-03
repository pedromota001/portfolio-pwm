import "./Botao.css";


const Botao = (props) => {
    const onClickButton = () =>{
        if(props.texto === "Sobre mim"){
            const redirect = document.getElementById('sobre-div');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
        else if(props.texto === "Projetos"){
            const redirect = document.getElementById('projetos-div');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
        else if(props.texto === "Experiência"){
            const redirect = document.getElementById('experiência-div');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
        else if(props.texto === "Habilidades"){
            const redirect = document.getElementById('habilidades-div');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
        else{
            const redirect = document.getElementById('certificados-div');
            if (redirect) redirect.scrollIntoView({behavior: "smooth"})
        }
    }
    return(
        <button onClick={onClickButton}>
            {props.texto}
        </button>
    )
}


export default Botao