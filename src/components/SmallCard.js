import React from 'react';

function SmallCard(props){
    return(
        <React.Fragment>
            <div className="col-md-12 mb-12">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <h4>Cantidad de Usuarios Registrados</h4>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-XL font-weight-bold text-primary text-uppercase mb-1`}> {props.total}</div>
                                
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-users fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SmallCard;

// linea 12 <div className="h5 mb-0 font-weight-bold text-gray-800">{(props.moneda ? '$'+props.valor:  props.valor)}</div> //