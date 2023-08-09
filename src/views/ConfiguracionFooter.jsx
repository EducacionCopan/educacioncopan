import { Button, Card, FloatingLabel, Form, Table } from 'react-bootstrap';

export const ConfiguracionFooter = ({data, handleClose=null}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    //await updateGeneralConfig(values)
    if(!handleClose) window.location.reload();
    handleClose()
  };

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Pie de Página</h3>
      </Card.Header>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="resumen">Resumen</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Resumen"
            style={{ height: '100px' }}
            name='resumen'
            id='resumen'
            value={data.footerDesc}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Direccion">
            <Form.Control aria-label="Direccion"  id="direccion" name="direccion" value={data.footerDireccion} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Correo">
            <Form.Control aria-label="Correo"  id="correo" name="correo" value={data.footerCorreo} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Telefono">
            <Form.Control aria-label="Telefono"  id="telefono" name="telefono" value={data.footerTelefonos} required/>
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-4">
          <FloatingLabel label="Enlace">
            <Form.Control aria-label="Enlace"  id="enlace" name="enlace" value={data.footerEnlace} required/>
          </FloatingLabel>
        </Form.Group>
      </Form>  
      <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th>Red Social</th>
              <th>Existe</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {
              data.footerRedes.map((red, i) => (
                <tr key={i}>
                  <td>{red.name}</td>
                  <td><input type="checkbox" name="" id="" checked={red.exists} /></td>
                  <td><input type="text" disabled={!red.exists} style={{width: '100%'}} value={red.enlace}/></td>
                </tr>
              ))
            }
          </tbody>
        </Table>

      </Card.Body>
      <Card.Footer>
        <Button variant="warning" onClick={handleClose}>
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}
