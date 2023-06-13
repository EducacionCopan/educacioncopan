import { Noticia } from "./Noticia"

export const ContainerNoticias = ({isLoading, noticias}) => {
  if(isLoading){
    return <p>Cargando datos...</p>
  }
  console.log(noticias)
  return (
    <div className="contenedor-noticias">
      {
        noticias.map((noticia) => (
          <Noticia key={noticia._id} noticia={noticia} />
        )) 
      }
    </div>
  )
}
