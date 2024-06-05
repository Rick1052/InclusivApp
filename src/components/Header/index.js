import { Link } from "react-router-dom";

import './../../App.css';

import Logotipo from './../../assets/imagens/logotipo.png'

function Header(){
    return(
        <header className="header">
            <img src={Logotipo} className="logotipo"/>
            <nav className="nav-bar">
                <ul className="nav-menu">
                    <li><Link to="/" className="nav-item">HOME</Link></li>
                    <li><Link to="/catalogo" className="nav-item">ESTABELECIMENTOS</Link></li>
                    <li><Link to="/sobre" className="nav-item">SOBRE NÓS</Link></li>
                    <li><Link to="/cadastrar_estabelecimento" className="nav-item">FAZER PARTE</Link></li>
                    <button className="menu-md">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default Header;