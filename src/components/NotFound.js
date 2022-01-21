import React from 'react';
import imagen from '../assets/images/error404.jpg';

function NotFound(){
    return(
        <>
            <div className="w-100">
                <h1> Pagina no econtrada - Error 404</h1>
                <img className="w-50" src={imagen} alt="error 404" />
            </div>       
        </>
    )
}
export default NotFound;