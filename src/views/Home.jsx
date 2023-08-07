import { Layout } from "./Layout.jsx";
import { Button, Card, Col, Container, Image, Row, Modal } from "react-bootstrap";
import fondo from "../assets/images/fondo-main.jpg"
import organigrama from "../assets/images/organigrama.jpg"
import lider from "../assets/images/img-lider.jpg"
import nosotros from "../assets/images/img-nosotros.jpg"
import data from "../data/info-pagina.json"; 
import '../assets/styles/home.css';
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { Configuracion } from "./Configuracion.jsx";
import useFetch from "../hooks/useFetch.js";
import { LoadingScreen } from "./LoadingScreen.jsx";

export const Home = () => {
  const {valid, userData} = useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [values, setValues] = useState({});
  const { data: mongoData, isLoading } = useFetch(process.env.REACT_APP_API_URL +  `/config`);

  useEffect(() => {
    if(mongoData){
      setValues(mongoData)
    }
  }, [mongoData, isLoading])

  if(isLoading){
    return <LoadingScreen />
  }

  return(
    <>
    <Layout pagina={'Educación'}>
      <Container>
        <section>
          {
              (valid && userData.rol !== 'Publish') ? 
              <Button variant="warning" className="config-button" onClick={handleShow}><i className="bi bi-tools"></i>{' '}Editar Informacion General</Button>
              : ''
          }
          <Image src={fondo}
          className="animate__animated animate__fadeIn" id="main-image" fluid/>
          <h1 id="main-title" className="animate__animated animate__fadeInUp">{values.titulo}</h1>
          <p id="text-departamento" className="animate__animated animate__fadeInUp">{values.subtitulo}</p>
        </section>

        <section className="sobre-nosotros" id="sobre-nosotros">
          <h2 className="sub-title">¿Quiénes Somos?</h2>
          <Card>
            <Card.Body className="nosotros-container">
              <Row>
              <Col md={9}>
                <p className="text-nosotros">
                  {values.nosotros}
                </p>
              </Col>
              <Col md={3}>
                <Image id="img-about" src={nosotros} fluid thumbnail/>
              </Col>
            </Row>

            <Row>
              <Col md={9}>
                <blockquote className="text-fundador">
                  {values.mensaje}
                </blockquote>
                <p className="autor">
                  {values.autor}
                </p>
              </Col>
              <Col md={3}>
                <Image id="img-about" src={lider} fluid roundedCircle/>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        </section>

        <section className="mision-vision" id="mision-vision">
          <h2 className="sub-title">Misión y Visión</h2>
          <Row>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-book text-icon"></i>Misión
                  </div>
                  <div className="content">
                    {values.mision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100">
                <Card.Body className="item">
                  <div className="icon">
                    <i className="bi bi-search text-icon"></i>Visión
                  </div>
                  <div className="content">
                    {values.vision}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="organigrama" id="organigrama">
          <h2 className="sub-title">Organigrama</h2>
          <div className="media-container">
            <Image src={organigrama} fluid thumbnail/>
          </div>
        </section>

        <section className="valores" id="valores">
          <h2 className="sub-title">Nuestros Valores</h2>
          <Card>
            <Card.Body className="nosotros-container">
            <ul>
              {
                data.valores.map((valor, i) => (<li key={i}>
                  <b>{valor.nombre}</b>{': ' + valor.contenido}
                </li>))
              }
              </ul>
            </Card.Body>
          </Card>
        </section>

        <section className="cobertura" id="cobertura">
          <h2 className="sub-title">Cobertura</h2>
          <div className="media-container">
            <iframe title={values.departamento} src={values.urlMapa} 
            width="600" height="480"></iframe>
          </div>
        </section>
      </Container>
    </Layout>
    <Modal show={show} onHide={handleClose} size="lg">
      <Configuracion data={values}/>
    </Modal>
    </>
  );
}
