import React from 'react';
import imagenFondo from '../../../assets/images/pionono.jpg';

function UltimoProductoAgregado(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Ultimo Producto Cargado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Imagen Del Producto "/>
                        <h4>{props.products[props.products.length-1].name}</h4>
                        <p>Precio: {props.products[props.products.length-1].price}</p>
                        <p>Stock: {props.products[props.products.length-1].stock}</p>
                        <p>Descripción: {props.products[props.products.length-1].description} </p>
                    </div>
                <div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UltimoProductoAgregado;
