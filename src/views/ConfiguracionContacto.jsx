import { Button, Card, Table } from 'react-bootstrap';

export const ConfiguracionContactos = ({data, handleClose=null}) => {

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Contacto</h3>
      </Card.Header>
      <Card.Body>
        {
          data.map((municipio, index) => (
            <>
              <input key={index} type="text" value={municipio.name}/>
              <Table responsive="sm" bordered>
                <thead>
                  <tr>
                    <th>Nombre establecimiento</th>
                    <th>Telefonos</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    municipio.referencias.map((valor, i) => (
                      <tr key={i}>
                        <td><input type="text" style={{width: '100%'}} value={valor.split(':')[0]}/></td>
                        <td><input type="text" style={{width: '100%'}} value={valor.split(':')[1]}/></td>
                        <td className="d-flex justify-content-center align-items-center">
                          <Button variant="danger">
                            <i className="bi bi-trash"></i>{' '}Eliminar
                          </Button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
                  <Button variant="info">
                    Agregar establecimiento
                  </Button>
              </Table>
            </>
          ))
        }
        <Button variant="info">
          Agregar Municipio
        </Button>
      </Card.Body>
      <Card.Footer>
        <Button variant="warning">
          Guardar Cambios
        </Button>
      </Card.Footer>
    </Card>
  );
}
