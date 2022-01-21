import React from "react";
import ContentRowUsers from "./ContentRowUsers";
import ContentRowProducts from "./ContentRowProducts";

function ContentRowTop() {
  return (
    <>

      <h1 className="h3  text-gray-800 text-center">App Dashboard</h1>
      <div className="d-flex justify-content-start mb-3 mt-2">
        <ContentRowUsers />

        <ContentRowProducts />
      </div>
    </>
  );
}
export default ContentRowTop;
