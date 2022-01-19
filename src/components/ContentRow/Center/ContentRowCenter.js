import React from 'react';
import ProductsD from './ProductsDb';
// import ProductoDestacado from './ProductoDestacado';
// import UltimoProductoAgregado from './UltimoProductoAgregado';
// import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">


            <ProductsD/>
            {/* <ProductoDestacado />
            <GenresInDb />
            <UltimoProductoAgregado /> */}
            
            

        </div>
    )
}

export default ContentRowCenter;