import React from 'react';
import './estilos.css';
import './normalize.css';


const Cabecera = () => {

    return ( 
        <header className="banner">
        <nav className="nav contenedor">
            <div className="nav_logo">
                <p className="nav_title"> Directorio de Restaurantes</p>
            </div>

            <ul className="nav_link nav_link--menu">
                <li className="nav_items">
                    <a href="/" className="nav_links">Inicio</a>
                </li>
                <li className="nav_items">
                    <a href="/busqueda" className="nav_links">Búsqueda</a>
                </li>
                <li className="nav_items">
                    <a href="/ingresarrestaurante" className="nav_links">Ingresar restaurante</a>
                </li>
            </ul>        
        </nav> 

        <section className="banner_contenedor contenedor">
            <h1 className="banner_title">Consulta los mejores restaurantes de la zona.</h1>
            <p className="banner_paragraph">Los encontrarás preferencialmente con la calificación del público, o por nombre mediante la sección búsqueda.</p>
        </section>
        </header>  
    );
}

export {
    Cabecera
}