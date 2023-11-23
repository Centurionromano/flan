import React, { Component } from "react";
import juan from "../assets/img/juan.jpg";
import maria from "../assets/img/maria.jpg";
import ana from "../assets/img/ana.jpg";
import sales from "../assets/img/sales.jpg";

const Coments = () => {
  return (
    <div>
      <section className="articleContainer">
        <article>
          <div className="container-items">
            <div className="item">
              <figure>
                <img src={juan} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>Juán Pérez.Guadalajara, México.Flan de chocolate.</h2>
                <p className="pprivacy">
                  "He probado varios flanes de chocolate en mi vida, pero el de
                  La casa del flan es el mejor que he probado. El chocolate es
                  intenso y cremoso, y la textura del flan es perfecta. Sin
                  duda, lo recomiendo a todos los amantes del chocolate.
                </p>
              </div>
            </div>

            <div className="item">
              <figure>
                <img src={maria} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>María Hernández. Monterrey, México. Flan de vainilla.</h2>
                <p className="pprivacy">
                  {" "}
                  "El flan de vainilla de La casa del flan es un clásico que
                  nunca falla. La vainilla es suave y delicada, y el flan es
                  cremoso y ligero. Es el flan perfecto para cualquier ocasión.{" "}
                </p>
              </div>
            </div>

            <div className="item">
              <figure>
                <img src={ana} alt="producto" />
              </figure>

              <div className="info-product">
                <h2>Ana García. Ciudad de México. Flan de frutas.</h2>
                <p className="pprivacy">
                  "El flan de frutas de La casa del flan es una delicia. Las
                  frutas son frescas y sabrosas, y el flan es cremoso y ligero.
                  Es el flan perfecto para una ocasión especial."
                </p>
              </div>
            </div>

            <div className="item">
              <figure></figure>
              <div classNameName="info-product">
                <h2>Deja tu comentario</h2>

                <h1>Envía tu recomendación</h1>

                <form action="enviar.php" method="post">
                  <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="ciudad">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      id="ciudad"
                      name="ciudad"
                      placeholder="Tu ciudad"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="producto">Producto</label>
                    <select
                      className="form-control"
                      id="producto"
                      name="producto"
                    >
                      <option value="flan-chocolate">Flan de chocolate</option>
                      <option value="flan-vainilla">Flan de vainilla</option>
                      <option value="flan-frutas">Flan de frutas</option>
                      <option value="flan-vainilla">Flan de coco</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="foto">Foto</label>
                    <input
                      type="file"
                      class="form-control"
                      id="foto"
                      name="foto"
                      accept="image/*"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="comentario">Comentario</label>
                    <textarea
                      className="form-control"
                      id="comentario"
                      name="comentario"
                      placeholder="Tu comentario"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </form>

                <p classNameName="psales"></p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Coments;
