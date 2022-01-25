import React from 'react';
import imagenFondo from '../../../assets/images/tortaChocolate.jpg'; 

function ProductoDestacado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Producto destacado del mes</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Imagen Del Producto "/>
                        <h4>{props.products[111].name}</h4>
                        <p>Precio: {props.products[111].price}</p>
                        <p>Stock: {props.products[111].stock}</p>
                        <p>Descripción: {props.products[111].description} </p>
                    </div>
                <div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductoDestacado;
