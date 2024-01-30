import React, { useState } from "react";

function Products({ category, detail }) {
  
  const [a, b] = useState(false);
  return (
    <div className="m-5 p-5 bg-myYellow">
      <h1 className={`${a === false ? "text-myBlue" : "text-myRed"}`}>Product Details</h1>
      <p>Product Category : {category}</p>
      <p> Shipped from : {detail.countryOfOrigin}</p>
      <p> Manufactured : {detail.manufactureYear}</p>
      <button
        onClick={() => b(!a)}
        className="px-3 bg-myBlue py-1 rounded-md text-myYellow"
      >
        Click
      </button>
    </div>
  );
}

export default Products;
