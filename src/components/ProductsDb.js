import React, { Component } from "react";

import ProductList from './ProductList'

class ProductsDb extends Component {
  
  render() {
    return (
      <>
        <div className="container-fluid" >
          <ProductList/>
        </div>
      </>
    );
  }
}
export default ProductsDb;
