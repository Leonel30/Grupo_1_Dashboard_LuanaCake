import React from 'react';
import imagen from '../assets/images/error404.jpg';

function NotFound(){
    return(
        <>
            <div className="w-100">
                <img className="w-100" src={imagen} alt="error 4040" />
            </div>       
        </>
    )
}
export default NotFound;