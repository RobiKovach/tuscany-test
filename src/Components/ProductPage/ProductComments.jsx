import React from "react";
import CommentsSlider from "../CommentsSlider/CommentsSlider";
import translations from "../../data/translations.json";

const ProductComments = ({ productId, language }) => {
  return (
    <div className="product-info__comments comments-product">
      <h2 className="comments-product__title title">
        {translations[language].happyCustomersSays}
      </h2>
      <CommentsSlider productId={productId} />
    </div>
  );
};

export default ProductComments;
