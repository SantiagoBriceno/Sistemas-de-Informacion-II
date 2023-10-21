import React from "react";
import "./assets/css/header.css"
const srcLogo = './assets/images/logo.png'

const Header = () => {
    return(
        <header className="header">
            <div className="header_container">
                <div className="header_logo">
                    <img src="./assets/images/logo.png"></img> 
                    {/* No se por qué no renderiza el src de la imagen */}
                </div>
                <div className="header_menu">
                   
                    <ul>
                        <li><a href="/">Administrador</a></li>
                        <li><a href="/contact">Servicios TransporteAutomoviles C.A.</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;