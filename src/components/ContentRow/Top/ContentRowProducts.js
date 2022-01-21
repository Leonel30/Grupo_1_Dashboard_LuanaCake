import React, { Component } from "react";
import SmallCardProducts from "./SmallCards/SmallCardProducts";

class ContentRowProducts extends Component {
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
          <div className="container-fluid">
            {this.state.productsList.map((product, index) => {
              return <SmallCardProducts {...product} key={index} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
export default ContentRowProducts;
