import Ancora from "../Ancora";
import "./cabecalho.css";


const Cabecalho = () => {
    return(
        <header className="topbar">
            <nav className="navbar">
                <h1>Portfólio</h1>
                <h1>19 anos</h1>
                <h1>Unicap</h1>
                <div>
                    <Ancora
                        icon = "github"
                    />
                    <Ancora/>
                </div>
            </nav>
        </header>
    )
}

export default Cabecalho