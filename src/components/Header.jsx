import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import flan from "../assets/images/flan.png";

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
                <NavLink to="/">Inicio</NavLink>
              </li>

              <li>
                <NavLink to="/comentarios">Comentarios</NavLink>
              </li>
              <li>
                <NavLink to="/politicas">Políticas</NavLink>
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
