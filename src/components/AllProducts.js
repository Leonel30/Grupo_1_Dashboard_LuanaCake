import React from 'react';
import TopBar from './TopBar';


function AllProducts(props){
    return(
		
        <React.Fragment>
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<TopBar/>
						<div className="card-body">
							<div className="table-responsive">
							<h1 className="h3 mb-2 text-gray-800">Lista de todos los Productos</h1>
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
									<tfoot>
										{/* <tr>
                                            <th>Iddfgdfg</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
											<th>Duración</th>
										</tr> */}
									</tfoot>
									<tbody>
										<tr>
											<td>01dfgdfg</td>
											<td>Reto al destino</td>
											<td>20</td>
                                            <td>15</td>
											<td>120</td>
											<td>120</td>
										</tr>
										{/* <tr>
											<td>02</td>
											<td>La caida del halcon negro</td>
											<td>10</td>
											<td>18</td>
											<td>240</td>
										</tr> */}
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default AllProducts;