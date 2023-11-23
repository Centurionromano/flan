import React, { Component } from "react";

const Footer = () => {
  const handleClick = () => {
    window.open(
      "mailto:" + window.location.origin + "/mailto/lacasa.delflan@gmail.com",
      "_blank"
    );
  };

  return (
    <footer id="footer">
      <div className="center">
        <p>
          &copy; La casa del flan unidos y asociados S.A. de C.V
          lacasadelflan.me
          <br />
          <button onClick={handleClick}>
            <span>Enviar sugerencia o queja</span>
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
