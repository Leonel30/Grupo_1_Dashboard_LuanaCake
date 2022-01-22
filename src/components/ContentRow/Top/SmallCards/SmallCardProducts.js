import React from 'react';


function SmallCardProduct(props){
     
    return(
        <React.Fragment>
            <div className="col-md-12 mb-12">
                <div className={`card border-left-primary shadow h-100 py-2`}>
                    <h4>Cantidad de Productos Registrados</h4>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-XL font-weight-bold text-primary text-uppercase mb-1`}> 
                                {props.total}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-box-open fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}
export default SmallCardProduct;

// linea 12 <div className="h5 mb-0 font-weight-bold text-gray-800">{(props.moneda ? '$'+props.valor:  props.valor)}</div> //