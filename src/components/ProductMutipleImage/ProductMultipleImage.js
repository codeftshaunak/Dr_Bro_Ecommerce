import React from "react";

const ProductMultipleImage = ({ imgs }) => {
  imgs?.map((currEle, index) => {
    return (
      <div>
        <img src={currEle.url} alt={currEle.filename} key={index} />
      </div>
    );
  });
};

export default ProductMultipleImage;
