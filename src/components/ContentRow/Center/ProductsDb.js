import React, { Component } from "react";

import ProductoDestacado from "./ProductoDestacado";
import AllProducts from "../../AllProducts"

import UltimoProductoAgregado from "./UltimoProductoAgregado";

class ProductsDb extends Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({
          productsList: products.data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="d-flex">
            {this.state.productsList.map((product, index) => {
              return [<ProductoDestacado {...product} key={index} />,
                <UltimoProductoAgregado {...product} key={index} />,
                ];
            })}
          </div>
        </div>
      </>
    );
  }
}
export default ProductsDb;
