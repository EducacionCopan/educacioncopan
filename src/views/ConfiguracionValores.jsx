import { Button, Card, Table } from 'react-bootstrap';

export const ConfiguracionValores = ({data, handleClose=null}) => {
  let names = []
  let descriptions = []

  data.forEach((valor, i) => {
    names[i] = valor.nombre;
    descriptions[i] = valor.descripcion;
  })

  console.log(names)
  const handleSubmit = async (e) => {
    e.preventDefault();
    //await updateGeneralConfig(values)
    if(!handleClose) window.location.reload();
    handleClose()
  };

  return (
    <Card>
      <Card.Header>
        <h3>Editar Infomación de Valores</h3>
      </Card.Header>
      <Card.Body>
      <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Descripcion</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((valor, i) => (
                <tr key={i}>
                  <td><input type="text" style={{width: '100%'}} value={valor.nombre}/></td>
                  <td><textarea name="" id="" cols="50" rows="3" value={valor.descripcion}></textarea></td>
                  <td className="d-flex justify-content-center align-items-center">
                    <Button variant="danger">
                      <i className="bi bi-trash"></i>{' '}Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <Button variant="info">
          Agregar
        </Button>
        <Button variant="warning" className='mx-5'>
          Guardar Cambios
        </Button>
      </Card.Body>
    </Card>
  );
}
