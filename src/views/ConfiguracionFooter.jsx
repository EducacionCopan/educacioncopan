import { Button, Card, Table } from 'react-bootstrap';

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
