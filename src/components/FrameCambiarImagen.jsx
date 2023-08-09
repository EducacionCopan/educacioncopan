import React from "react";
import { Button } from "react-bootstrap"

export const FrameCambiarImagen = ({show=false, children}) => {


  const handleFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
  };

  const inputRef = React.createRef();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {
        show &&
        <>
          <Button variant="warning" style={{position:'absolute',top: '15px', left: '15px'}} onClick={handleFile}>
            <i className="bi bi-images"></i>
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </>
      }
    </div>
  )
}
