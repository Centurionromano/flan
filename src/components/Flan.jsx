import React, { Component } from "react";
import chocolate from "../assets/img/chocolate.jpg";
import coco from "../assets/img/coco.jpg";
import fruta from "../assets/img/fruta.jpg";
import vainilla from "../assets/img/vainilla.jpg";

const Flan = () => {
  return (
    <div>
      <section className="articleContainer">
        <article>
          <div className="container-items">
            <div className="item">
              <figure>
                <img src={chocolate} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>Flan de chocolate</h2>
                <p className="price">$100</p>
                <button>Comprar</button>
              </div>
            </div>

            <div className="item">
              <figure>
                <img src={coco} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>Flan de coco</h2>
                <p className="price">$150</p>
                <button>Comprar</button>
              </div>
            </div>

            <div className="item">
              <figure>
                <img src={vainilla} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>Flan de vainilla</h2>
                <p className="price">$150</p>
                <button>Comprar</button>
              </div>
            </div>

            <div className="item">
              <figure>
                <img src={fruta} alt="producto" />
              </figure>
              <div className="info-product">
                <h2>Flan de fruta</h2>
                <p className="price">$100</p>
                <button>Comprar</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Flan;
