import React from "react";
import TopBar from "./TopBar";



function AllProducts(props) {
  return (
    <React.Fragment>
      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <TopBar />
        <div className="card-body">
          <div className="table-responsive">
            <h1 className="h3 mb-2 text-gray-800">
              Lista de todos los Productos
            </h1>
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Stock</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Sabor</th>
                </tr>
              </thead>
              <tfoot></tfoot>
              <tbody>
                {props.products.map((producto) => {
                  return ( 
                    <tr>
                      
                      <td>{producto.id}</td>
                      <td>{producto.name}</td>
                      <td>{producto.stock}</td>
                      <td>{producto.price}</td>
                      <td>{producto.category_id}</td>
                      <td>{producto.flavor_id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default AllProducts;
