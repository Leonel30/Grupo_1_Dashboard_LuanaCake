import React from 'react';
import imagen from '../assets/images/mantenimiento.jpg';

function NotFound(){
    return(
        <>
            <div className="w-100">
                <h1> Pagina en Produccion </h1>
                <h2> Disculpe las molestias estamos trabajando para mejorar el servicio</h2>
                <img className="w-50" src={imagen} alt="error 404" />
            </div>       
        </>
    )
}
export default NotFound;