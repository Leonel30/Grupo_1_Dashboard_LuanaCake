import React from "react";
import ContentRowUsers from "./ContentRowUsers";
import ContentRowProducts from "./ContentRowProducts";
import Typical from "react-typical";

function ContentRowTop() {
  return (
    <>

      <h1 className="h2  text-gray-1000 text-center">
      <Typical 
             loop ={Infinity}
             steps={ [
                 "Luana Cake 🍰",
                 1000,
                 "🍪 ",
                 1000,
                 "🧁",
                 1000,
                 "🎂",
                 1000,
             ]}
             /> 
      </h1>
      <div className="d-flex justify-content-start mb-3 mt-2">
        <ContentRowUsers />

        <ContentRowProducts />
      </div>
    </>
  );
}
export default ContentRowTop;
