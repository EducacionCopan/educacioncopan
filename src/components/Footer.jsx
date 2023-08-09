import { Button, Modal } from "react-bootstrap"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { ConfiguracionFooter } from "../views/ConfiguracionFooter";

export const Footer = () => {
  const [values, setValues] = useState({});
  const { data: mongoData, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/config`);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(mongoData){
      setValues(mongoData)
    }
  }, [mongoData, isLoading])

  return (
    <>
    <footer
          className="text-center text-lg-start text-white mt-5"
          style={{backgroundColor: "var(--mp-azul-3)"}}
          >
    <div className="container p-4 pb-0">
      <div className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              {values.titulo}
            </h6>
            <p>
            {values.footerDesc}
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
            <p><i className="fas fa-home mr-3"></i>{values.footerDireccion}</p>
            <p><i className="fas fa-envelope mr-3"></i>{values.footerCorreo}</p>
            <p><i className="fas fa-phone mr-3"></i>{values.footerTelefonos}</p>
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
              <div>
            <Button variant="warning" onClick={handleShow}>
              <i className="bi bi-tools"></i>{' '}Modificar
            </Button> 
          </div>
          </div>
        </div>
      </div>
    </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "var(--mp-rojo-1)"}}
         >
      © 2023 Copyright:
      <br /><a className="text-white" href={values.footerEnlace}>{values.subtitulo}
      </a>
    </div>
  </footer>
  <Modal show={show} onHide={handleClose} size="lg">
      <ConfiguracionFooter data={values} handleClose={handleClose}/>
  </Modal>
  </>
  )
}
