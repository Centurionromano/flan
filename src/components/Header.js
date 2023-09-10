import React, { Component } from 'react';
import flan from'../assets/images/flan.png';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    {/*MENU*/}
                    <div id="logo">
                        <img src={flan} className="app-flan" alt="flan" />
                        <span id="brand">
                            <strong>La casa del flan</strong>
                        </span>
                    </div>

                    {/*MENU*/}
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="formulario.html">Formulario</a>
                            </li>
                            <li>
                                <a href="#">Pagina 1</a>
                            </li>
                            <li>
                                <a href="#">Pagina 2</a>
                            </li>
                        </ul>
                    </nav>

                    {/*LIMPIAR FLOTADOS*/}
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }
}

export default Header;