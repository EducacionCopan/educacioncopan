export const Footer = () => {
  return (
    <footer
          className="text-center text-lg-start text-white mt-5"
          style={{backgroundColor: "var(--mp-azul-3)"}}
          >
    <div className="container p-4 pb-0">
      <div className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Salud Copan
            </h6>
            <p>
            El Departamento de Salud y Servicios Humanos trabaja con los gobiernos estatales y locales en todo el país para realizar investigaciones y prestar servicios públicos de salud, programas de seguridad de alimentos y medicamentos, programas de seguro médico de salud y muchos otros servicios.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Sobre Nosotros</h6>
            <p>
              <a className="text-white" href="/#sobre-nosotros">¿Quiénes somos?</a>
            </p>
            <p>
              <a className="text-white" href="/#mision-vision">Misión y Visión</a>
            </p>
            <p>
              <a className="text-white" href="/#organigrama">Organigrama</a>
            </p>
            <p>
              <a className="text-white" href="/#valores">Valores</a>
            </p>
            <p>
              <a className="text-white" href="/#cobertura">Cobertura</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
            <p><i className="fas fa-home mr-3"></i> Santa Rosa de Copán</p>
            <p><i className="fas fa-envelope mr-3"></i> gestioncopan@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +504 2662-1234 / 9556-5466</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Nuestras Redes</h6>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#3b5998"}}
               href="#!"
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#55acee"}}
               href="#!"
               role="button"
               ><i className="fab fa-twitter"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#dd4b39"}}
               href="#!"
               role="button"
               ><i className="fab fa-google"></i
              ></a>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#ac2bac"}}
               href="#!"
               role="button"
               ><i className="fab fa-instagram"></i
              ></a>
          </div>
        </div>
      </div>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "var(--mp-rojo-1)"}}
         >
      © 2023 Copyright:
      <br /><a className="text-white" href="https://transparencia.se.gob.hn/departamentales/departamento/4/">Direccion Departamental de Educación de Copán
      </a>
    </div>
  </footer>
  )
}
